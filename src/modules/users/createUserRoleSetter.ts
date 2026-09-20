import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, TailscaleUser, UserRole } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Updates the role for a user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @param role - The role to assign to the user.
 * @returns {Promise<TailscaleUser>} A promise resolving to the updated user record.
 */
export default async function createUserRoleSetter(
  apiKey: APIKey,
  userID: string,
  role: UserRole
): Promise<TailscaleUser> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/users/${userID}/role`,
    apiKey,
    { method: "POST", body: JSON.stringify({ role }) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation users.setUserRole with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as TailscaleUser;
}
