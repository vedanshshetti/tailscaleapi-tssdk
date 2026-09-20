import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/** Accepts a device invite. */
export default async function createDeviceInviteAcceptor(apiKey, inviteID) {
    const response = await authorisedFetch(`${TailscaleAPIBaseURL}/device-invites/${inviteID}/accept`, apiKey, { method: "POST" });
    if (!response.ok)
        throw new Error(buildErrorMessage(`Operation deviceInvites.acceptDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`, response));
}
//# sourceMappingURL=createDeviceInviteAcceptor.js.map