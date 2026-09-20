import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, ISO8601TimeStamp } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type UpdateCustomDevicePostureAttributesBody = {
  // Schema copied from official Tailscale Docs.
  comment?: string;
  nodes: Record<
    string,
    {
      [propertyName: string]: {
        value: string | number | boolean;
        expiry?: ISO8601TimeStamp;
      };
    }
  >;
};

/**
 * Updates custom device posture attributes in batch for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose posture attributes to update
 * @param body - An object containing nodes with posture attributes to update
 * @returns {Promise<void>} A promise that resolves when the posture attributes are successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createCustomDeviceBatchPostureAttributesUpdater(
  apiKey: APIKey,
  deviceID: string,
  body: UpdateCustomDevicePostureAttributesBody
): Promise<void> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}`,
    apiKey,
    { method: "patch", body: JSON.stringify(body) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation devices.batchUpdateCustomDevicePostureAttributes with API Key ${hideApiKey(
          apiKey
        )} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
}
