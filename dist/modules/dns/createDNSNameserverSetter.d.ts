import { APIKey, DNSNameserver } from "../../types";
export type SetNameserversReturnType = {
    dns: DNSNameserver[];
    magicDNS: boolean;
};
/**
 * Sets the DNS nameservers for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to set nameservers
 * @param dns - An array of DNS nameserver addresses to set
 * @param overrideGuardrails - Optional boolean to override safety guardrails (default: false).
 *                             Set to true to allow potentially invalid nameservers like 0.0.0.0.
 * @returns {Promise<SetNameserversReturnType>} A promise resolving to an object containing the updated DNS nameservers and magicDNS setting
 * @throws {Error} If the API request fails or if trying to set 0.0.0.0 without overrideGuardrails
 */
export default function createDNSNameserverSetter(apiKey: APIKey, tailnet: string, dns: DNSNameserver[], overrideGuardrails?: boolean): Promise<SetNameserversReturnType>;
