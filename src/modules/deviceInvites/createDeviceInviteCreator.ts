import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, DeviceInvite } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/** Creates an invite for a device. */
export default async function createDeviceInviteCreator(
  apiKey: APIKey,
  deviceID: string,
  body: Record<string, unknown>
): Promise<DeviceInvite> {
  const response = await authorisedFetch(
    `${TailscaleAPIBaseURL}/device/${deviceID}/device-invites`,
    apiKey,
    { method: "POST", body: JSON.stringify(body) },
    true
  );
  if (!response.ok)
    throw new Error(
      buildErrorMessage(
        `Operation deviceInvites.createDeviceInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`,
        response
      )
    );
  return (await response.json()) as DeviceInvite;
}
