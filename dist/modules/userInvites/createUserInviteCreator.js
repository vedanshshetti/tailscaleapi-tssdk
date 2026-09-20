import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Creates a user invite for a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @param body - The invite payload.
 * @returns {Promise<TailscaleUserInvite>} A promise resolving to the created invite.
 */
export default async function createUserInviteCreator(apiKey, tailnet, body) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/user-invites`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation userInvites.createUserInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createUserInviteCreator.js.map