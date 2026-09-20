import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Sets or changes the name of a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to rename
 * @param name - The new name to set for the device
 * @returns {Promise<void>} A promise that resolves when the device name is successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createDeviceNameSetter(
  apiKey: APIKey,
  deviceID: string,
  name: string
): Promise<void> {
  const body = { name };
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}/name`,
    apiKey,
    { method: "POST", body: JSON.stringify(body) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation devices.setDeviceName with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
}
