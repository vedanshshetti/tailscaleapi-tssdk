import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Sets or updates the tags for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose tags to set
 * @param tags - An array of tag strings to set on the device
 * @returns {Promise<void>} A promise that resolves when the device tags are successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createDeviceTagsSetter(apiKey, deviceID, tags) {
    const body = { tags };
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/tags`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.setDeviceTags with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createDeviceTagSetter.js.map