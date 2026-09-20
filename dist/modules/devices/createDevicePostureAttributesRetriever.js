import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Retrieves the posture attributes and their expiries for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose posture attributes to retrieve
 * @returns {Promise<GetDevicePostureAttributesReturnType>} A promise resolving to an object with device posture attributes and their expiries
 * @throws {Error} If the API request fails
 */
export default async function createDevicePostureAttributesRetriever(apiKey, deviceID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/attributes`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.getDevicePostureAttributes with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createDevicePostureAttributesRetriever.js.map