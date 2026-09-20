import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/** Resends a device invite. */
export default async function createDeviceInviteResender(
  apiKey: APIKey,
  inviteID: string
): Promise<void> {
  const response = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device-invites/${inviteID}/resend`,
    apiKey,
    { method: "POST" }
  );
  if (!response.ok)
    throw new Error(
      buildErrorMessage(
        `Operation deviceInvites.resendDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`,
        response
      )
    );
}
