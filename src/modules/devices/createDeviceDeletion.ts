import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Deletes a specific device by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to delete
 * @returns {Promise<void>} A promise that resolves when the device is successfully deleted
 * @throws {Error} If the API request fails
 */
export default async function createDeviceDeletion(
  apiKey: APIKey,
  deviceID: string
): Promise<void> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}`,
    apiKey,
    { method: "delete" }
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation devices.deleteDevice with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
}
