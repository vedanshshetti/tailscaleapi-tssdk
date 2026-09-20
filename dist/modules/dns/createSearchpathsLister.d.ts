import { APIKey } from "../../types";
export type ListDNSSearchpathsReturnType = {
    searchPaths: string[];
};
/**
 * Lists all DNS search paths for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list DNS search paths
 * @returns {Promise<ListDNSSearchpathsReturnType>} A promise resolving to an object containing an array of search paths
 * @throws {Error} If the API request fails
 */
export default function createSearchpathsLister(apiKey: APIKey, tailnet: string): Promise<ListDNSSearchpathsReturnType>;
