import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Lists all devices for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list devices
 * @returns {Promise<ListTailnetDevicesReturnType>} A promise resolving to an object containing an array of device objects
 * @throws {Error} If the API request fails
 */
export default async function createDeviceLister(apiKey, tailnet) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/devices`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.listTailnetDevices with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`, req));
    return (await req.json());
}
//# sourceMappingURL=createDeviceLister.js.map