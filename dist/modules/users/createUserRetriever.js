import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Retrieves a single user record.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<TailscaleUser>} A promise resolving to the user record.
 */
export default async function createUserRetriever(apiKey, userID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/users/${userID}`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation users.getUser with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createUserRetriever.js.map