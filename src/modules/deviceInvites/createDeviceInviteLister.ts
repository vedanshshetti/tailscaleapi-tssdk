import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, ListDeviceInvitesReturnType } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/** Lists invites for a device. */
export default async function createDeviceInviteLister(
  apiKey: APIKey,
  deviceID: string
): Promise<ListDeviceInvitesReturnType> {
  const response = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}/device-invites`,
    apiKey
  );
  if (!response.ok)
    throw new Error(
      buildErrorMessage(
        `Operation deviceInvites.listDeviceInvites with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`,
        response
      )
    );
  return (await response.json()) as ListDeviceInvitesReturnType;
}
