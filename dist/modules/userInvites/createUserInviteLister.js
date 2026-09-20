import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Lists user invites for a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @returns {Promise<ListUserInvitesReturnType>} A promise resolving to the invite list.
 */
export default async function createUserInviteLister(apiKey, tailnet) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/user-invites`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation userInvites.listUserInvites with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createUserInviteLister.js.map