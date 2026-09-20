import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Deletes a user from the tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is deleted.
 */
export default async function createUserDeleter(
  apiKey: APIKey,
  userID: string
): Promise<void> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/users/${userID}/delete`,
    apiKey,
    { method: "POST" }
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation users.deleteUser with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`,
        req
      )
    );
}
