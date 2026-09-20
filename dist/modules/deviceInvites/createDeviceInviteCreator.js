import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/** Creates an invite for a device. */
export default async function createDeviceInviteCreator(apiKey, deviceID, body) {
    const response = await authorisedFetch(`${TailscaleAPIBaseURL}/device/${deviceID}/device-invites`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!response.ok)
        throw new Error(buildErrorMessage(`Operation deviceInvites.createDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`, response));
    return (await response.json());
}
//# sourceMappingURL=createDeviceInviteCreator.js.map