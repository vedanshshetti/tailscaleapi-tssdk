import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/** Deletes a device invite. */
export default async function createDeviceInviteDeleter(
  apiKey: APIKey,
  inviteID: string
): Promise<void> {
  const response = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device-invites/${inviteID}`,
    apiKey,
    { method: "DELETE" }
  );
  if (!response.ok)
    throw new Error(
      buildErrorMessage(
        `Operation deviceInvites.deleteDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`,
        response
      )
    );
}
