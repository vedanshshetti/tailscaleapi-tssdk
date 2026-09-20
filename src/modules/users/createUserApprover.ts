import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

/**
 * Approves a pending user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is approved.
 */
export default async function createUserApprover(
  apiKey: APIKey,
  userID: string
): Promise<void> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/users/${userID}/approve`,
    apiKey,
    { method: "POST" }
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation users.approveUser with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`,
        req
      )
    );
}
