import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Suspends a user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is suspended.
 */
export default async function createUserSuspender(apiKey, userID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/users/${userID}/suspend`, apiKey, { method: "POST" });
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation users.suspendUser with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createUserSuspender.js.map