import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Deletes a user invite.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param inviteID - The invite ID.
 * @returns {Promise<void>} A promise resolving when the invite is deleted.
 */
export default async function createUserInviteDeleter(apiKey, inviteID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/user-invites/${inviteID}`, apiKey, { method: "DELETE" });
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation userInvites.deleteUserInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createUserInviteDeleter.js.map