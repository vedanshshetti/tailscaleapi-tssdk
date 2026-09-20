import { APIKey } from "../../types";
export type GetDNSPreferencesReturnType = {
    magicDNS: boolean;
};
/**
 * Retrieves the DNS preferences for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to retrieve DNS preferences
 * @returns {Promise<GetDNSPreferencesReturnType>} A promise resolving to an object containing DNS preferences like magicDNS
 * @throws {Error} If the API request fails
 */
export default function createDNSPreferencesRetriever(apiKey: APIKey, tailnet: string): Promise<GetDNSPreferencesReturnType>;
