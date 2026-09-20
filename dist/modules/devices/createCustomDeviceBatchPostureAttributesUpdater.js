import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Updates custom device posture attributes in batch for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose posture attributes to update
 * @param body - An object containing nodes with posture attributes to update
 * @returns {Promise<void>} A promise that resolves when the posture attributes are successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createCustomDeviceBatchPostureAttributesUpdater(apiKey, deviceID, body) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}`, apiKey, { method: "patch", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.batchUpdateCustomDevicePostureAttributes with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createCustomDeviceBatchPostureAttributesUpdater.js.map