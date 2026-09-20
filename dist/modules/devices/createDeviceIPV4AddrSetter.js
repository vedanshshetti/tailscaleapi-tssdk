import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Sets or changes the IPv4 address of a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose IPv4 address to set
 * @param ipv4Address - The new IPv4 address (must be in the 100.x.x.x range)
 * @returns {Promise<void>} A promise that resolves when the IPv4 address is successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createDeviceIPV4AddrSetter(apiKey, deviceID, ipv4Address) {
    const body = { ipv4: ipv4Address };
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/ip`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.setIPV4Address with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createDeviceIPV4AddrSetter.js.map