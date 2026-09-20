import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Updates the configuration of an existing key by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which the key exists
 * @param keyID - The unique identifier of the key to update
 * @param body - The new key configuration object
 * @returns {Promise<TailscaleKey>} A promise resolving to the updated key object
 * @throws {Error} If the API request fails
 */
export default async function createKeySetter(apiKey, tailnet, keyID, body) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys/${keyID}`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation keys.setKey with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createKeySetter.js.map