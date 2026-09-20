import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

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
export default async function createSearchpathsSetter(
  apiKey: APIKey,
  tailnet: string,
  newSP: string[]
): Promise<SetSearchpathsReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/searchpaths`,
    apiKey,
    { method: "POST", body: JSON.stringify({ searchPaths: newSP }) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation dns.setSearchpaths with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`,
        req
      )
    );
  return (await req.json()) as SetSearchpathsReturnType;
}
