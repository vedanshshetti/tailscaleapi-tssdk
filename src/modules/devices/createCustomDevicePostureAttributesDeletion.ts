import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Deletes a custom device posture attribute from a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device from which to delete the posture attribute
 * @param attributeKey - The key of the attribute to delete
 * @returns {Promise<void>} A promise that resolves when the posture attribute is successfully deleted
 * @throws {Error} If the API request fails
 */
export default async function createCustomDevicePostureAttributesDeletion(
  apiKey: APIKey,
  deviceID: string,
  attributeKey: string
): Promise<void> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}/attributes/${attributeKey}`,
    apiKey,
    { method: "delete" }
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation devices.deleteCustomDevicePostureAttributes with API Key ${hideApiKey(
          apiKey
        )} and
     attribute key "${attributeKey}" failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
}
