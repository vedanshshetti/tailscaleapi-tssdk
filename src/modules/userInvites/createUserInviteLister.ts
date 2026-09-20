import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type ListUserInvitesReturnType = {
  userInvites: {
    id?: string;
    email?: string;
    created?: string;
    expires?: string;
    inviter?: string;
    status?: string;
    [key: string]: unknown;
  }[];
};

/**
 * Lists user invites for a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @returns {Promise<ListUserInvitesReturnType>} A promise resolving to the invite list.
 */
export default async function createUserInviteLister(
  apiKey: APIKey,
  tailnet: string
): Promise<ListUserInvitesReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/user-invites`,
    apiKey
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation userInvites.listUserInvites with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as ListUserInvitesReturnType;
}
