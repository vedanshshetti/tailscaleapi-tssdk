import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, TailscaleUserInvite } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Resends a user invite by ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param inviteID - The invite ID.
 * @returns {Promise<TailscaleUserInvite>} A promise resolving to the resent invite.
 */
export default async function createUserInviteResender(
  apiKey: APIKey,
  inviteID: string
): Promise<TailscaleUserInvite> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/user-invites/${inviteID}/resend`,
    apiKey,
    { method: "POST" }
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation userInvites.resendUserInvite with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as TailscaleUserInvite;
}
