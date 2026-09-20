import { APIKey } from "../../types";
export type SetDNSPreferencesReturnType = {
    magicDNS: boolean;
};
/**
 * Sets the DNS preferences for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to set DNS preferences
 * @param preferences - An object containing DNS preferences (currently supports magicDNS boolean)
 * @returns {Promise<SetDNSPreferencesReturnType>} A promise resolving to an object containing the updated DNS preferences
 * @throws {Error} If the API request fails
 */
export default function createDNSPreferencesSetter(apiKey: APIKey, tailnet: string, preferences: {
    magicDNS: boolean;
}): Promise<SetDNSPreferencesReturnType>;
