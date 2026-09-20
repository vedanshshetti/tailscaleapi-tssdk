import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, DNSNameserver } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

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
export default async function createSearchpathsLister(
  apiKey: APIKey,
  tailnet: string
): Promise<ListDNSSearchpathsReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/searchpaths`,
    apiKey
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation dns.listSearchpaths with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`,
        req
      )
    );
  return (await req.json()) as ListDNSSearchpathsReturnType;
}
