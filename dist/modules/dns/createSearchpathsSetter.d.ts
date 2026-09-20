import { APIKey } from "../../types";
export type SetSearchpathsReturnType = {
    searchPaths: string[];
};
/**
 * Sets or updates DNS search paths for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to set DNS search paths
 * @param newSP - An array of search path strings to set
 * @returns {Promise<SetSearchpathsReturnType>} A promise resolving to an object containing the newly set search paths
 * @throws {Error} If the API request fails
 */
export default function createSearchpathsSetter(apiKey: APIKey, tailnet: string, newSP: string[]): Promise<SetSearchpathsReturnType>;
