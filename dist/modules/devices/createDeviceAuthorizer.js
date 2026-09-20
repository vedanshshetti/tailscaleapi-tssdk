import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Authorizes or unauthorizes a device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to authorize/unauthorize
 * @param authorized - Boolean value: true to authorize, false to unauthorize
 * @returns {Promise<void>} A promise that resolves when the authorization is successfully updated
 * @throws {Error} If the API request fails
 */
export default async function createDeviceAuthorizer(apiKey, deviceID, authorized) {
    const body = { authorized };
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/authorized`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation devices.authorizeDevice with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
}
//# sourceMappingURL=createDeviceAuthorizer.js.map