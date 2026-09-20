import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Lists all active DNS nameservers for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list nameservers
 * @returns {Promise<ListNameserversReturnType>} A promise resolving to an object containing an array of DNS nameservers
 * @throws {Error} If the API request fails
 */
export default async function createDNSNameserverLister(apiKey, tailnet) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/nameservers`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation dns.listNameservers with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createDNSNameserverLister.js.map