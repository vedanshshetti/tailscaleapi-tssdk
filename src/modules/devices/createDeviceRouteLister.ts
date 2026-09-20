import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, Route } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type ListDeviceRoutesReturnType = {
  advertisedRoutes: Route[];
  enabledRoutes: Route[];
};

/**
 * Lists all routes (advertised and enabled) for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose routes to list
 * @returns {Promise<ListDeviceRoutesReturnType>} A promise resolving to an object containing advertised and enabled routes
 * @throws {Error} If the API request fails
 */
export default async function createDeviceRouteLister(
  apiKey: APIKey,
  deviceID: string
): Promise<ListDeviceRoutesReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}/routes`,
    apiKey
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation devices.listDeviceRoutes with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`,
        req
      )
    );
  return await req.json();
}
