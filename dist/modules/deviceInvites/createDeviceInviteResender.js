import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/** Resends a device invite. */
export default async function createDeviceInviteResender(apiKey, inviteID) {
    const response = await authorisedFetch(`${TailscaleAPIBaseURL}/device-invites/${inviteID}/resend`, apiKey, { method: "POST" });
    if (!response.ok)
        throw new Error(buildErrorMessage(`Operation deviceInvites.resendDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`, response));
}
//# sourceMappingURL=createDeviceInviteResender.js.map