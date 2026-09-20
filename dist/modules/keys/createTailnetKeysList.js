import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Lists all keys (auth keys, API access tokens, and trust credentials) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list keys
 * @param all - Determines whether all keys should be listed (true) or only keys accessible to the current API key (false)
 * @returns {Promise<ListTailnetKeysReturnType>} A promise resolving to an object containing an array of key objects
 * @throws {Error} If the API request fails
 */
export default async function createTailnetKeysLister(apiKey, tailnet, all) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys?all=${all}`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation keys.listTailnetKeys with API Key ${hideApiKey(apiKey)} failed;
        Tailscale API returned a status code of ${req.status} with
        status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createTailnetKeysList.js.map