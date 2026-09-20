import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Deletes a key (auth key, API access token, or trust credential) by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which the key exists
 * @param keyID - The unique identifier of the key to delete
 * @returns {Promise<void>} A promise that resolves when the key is successfully deleted
 * @throws {Error} If the API request fails
 */
export default async function createKeyDeletion(apiKey, tailnet, keyID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys/${keyID}`, apiKey, { method: "delete" });
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation keys.deleteKey with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createKeyDeletion.js.map