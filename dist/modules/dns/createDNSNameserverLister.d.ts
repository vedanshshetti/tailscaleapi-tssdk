import { APIKey, DNSNameserver } from "../../types";
export type ListNameserversReturnType = {
    dns: DNSNameserver[];
};
/**
 * Lists all active DNS nameservers for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list nameservers
 * @returns {Promise<ListNameserversReturnType>} A promise resolving to an object containing an array of DNS nameservers
 * @throws {Error} If the API request fails
 */
export default function createDNSNameserverLister(apiKey: APIKey, tailnet: string): Promise<ListNameserversReturnType>;
