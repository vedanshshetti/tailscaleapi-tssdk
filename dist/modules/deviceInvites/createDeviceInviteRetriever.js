import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/** Retrieves a device invite. */
export default async function createDeviceInviteRetriever(apiKey, inviteID) {
    const response = await authorisedFetch(`${TailscaleAPIBaseURL}/device-invites/${inviteID}`, apiKey);
    if (!response.ok)
        throw new Error(buildErrorMessage(`Operation deviceInvites.getDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`, response));
    return (await response.json());
}
//# sourceMappingURL=createDeviceInviteRetriever.js.map