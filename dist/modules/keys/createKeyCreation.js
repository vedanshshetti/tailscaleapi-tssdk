import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Creates a new key (auth key, API access token, or trust credential) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to create the key
 * @param body - The key configuration object
 * @returns {Promise<TailscaleKey>} A promise resolving to the created key object
 * @throws {Error} If the API request fails
 */
export default async function createKeyCreation(apiKey, tailnet, body) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys`, apiKey, { body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation keys.createKey with API Key ${hideApiKey(apiKey)} failed;
        Tailscale API returned a status code of ${req.status} with
        status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createKeyCreation.js.map