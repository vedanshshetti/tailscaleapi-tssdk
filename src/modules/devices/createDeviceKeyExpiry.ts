import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Expires the device key for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose key to expire
 * @returns {Promise<void>} A promise that resolves when the device key is successfully expired
 * @throws {Error} If the API request fails
 */
export default async function createDeviceKeyExpiry(
  apiKey: APIKey,
  deviceID: string
): Promise<void> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}/expire`,
    apiKey,
    { method: "POST" }
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation devices.expireDevice with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
}
