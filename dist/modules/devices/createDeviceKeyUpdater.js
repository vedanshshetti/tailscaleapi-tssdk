import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Updates whether a device's key can expire.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose key to update
 * @param keyCanExpire - Boolean value: true if the key can expire, false if it should be disabled
 * @returns {Promise<void>} A promise that resolves when the key expiry setting is successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createDeviceKeyUpdater(apiKey, deviceID, keyCanExpire) {
    const body = { keyExpiryDisabled: !keyCanExpire };
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/key`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.updateDeviceKey with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createDeviceKeyUpdater.js.map