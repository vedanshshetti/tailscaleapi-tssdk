import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Retrieves information for a specific device by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to retrieve
 * @returns {Promise<GetDeviceReturnType>} A promise resolving to the device object
 * @throws {Error} If the API request fails
 */
export default async function createDeviceRetriever(apiKey, deviceID) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.getDevice with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createDeviceRetriever.js.map