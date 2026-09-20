import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey, not } from "../../utils";
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
export default async function createDNSNameserverSetter(apiKey, tailnet, dns, overrideGuardrails = false) {
    if (overrideGuardrails)
        console.warn("WARNING: Running dns.createNameserverSetter with safety guardrails disabled.");
    if (dns.includes("0.0.0.0") && not(overrideGuardrails)) {
        throw new Error("Refusing to set DNS to 0.0.0.0 — this will break your tailnet. Set overrideGuardrails to true if you wish to proceed.");
    }
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/nameservers`, apiKey, { method: "POST", body: JSON.stringify({ dns }) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation dns.setNameservers with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createDNSNameserverSetter.js.map