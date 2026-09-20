import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Sets or updates a custom device posture attribute for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to set the posture attribute on
 * @param attribute - The posture attribute object containing name, value, optional comment and expiry
 * @returns {Promise<GetDevicePostureAttributesReturnType>} A promise resolving to the updated device posture attributes
 * @throws {Error} If the API request fails
 */
export default async function createCustomDevicePostureAttributesSetter(apiKey, deviceID, attribute) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/attributes/${attribute.name}`, apiKey, { method: "patch", body: JSON.stringify(attribute) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.setCustomDevicePostureAttributes with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createCustomDevicePostureAttributesSetter.js.map