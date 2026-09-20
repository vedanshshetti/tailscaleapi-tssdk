import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Retrieves a specific user invite.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param inviteID - The invite ID.
 * @returns {Promise<TailscaleUserInvite>} A promise resolving to the invite record.
 */
export default async function createUserInviteRetriever(apiKey, inviteID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/user-invites/${inviteID}`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation userInvites.getUserInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createUserInviteRetriever.js.map