import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Sets the DNS preferences for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to set DNS preferences
 * @param preferences - An object containing DNS preferences (currently supports magicDNS boolean)
 * @returns {Promise<SetDNSPreferencesReturnType>} A promise resolving to an object containing the updated DNS preferences
 * @throws {Error} If the API request fails
 */
export default async function createDNSPreferencesSetter(apiKey, tailnet, preferences) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/preferences`, apiKey, { method: "POST", body: JSON.stringify({ preferences }) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation dns.setPreferences with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createDNSPreferencesSetter.js.map