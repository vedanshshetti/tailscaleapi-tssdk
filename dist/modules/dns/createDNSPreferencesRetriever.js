import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Retrieves the DNS preferences for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to retrieve DNS preferences
 * @returns {Promise<GetDNSPreferencesReturnType>} A promise resolving to an object containing DNS preferences like magicDNS
 * @throws {Error} If the API request fails
 */
export default async function createDNSPreferencesRetriever(apiKey, tailnet) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/preferences`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation dns.getPreferences with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createDNSPreferencesRetriever.js.map