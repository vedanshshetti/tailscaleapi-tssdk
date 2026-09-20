import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type ListUsersReturnType = {
  users: {
    id?: string;
    loginName?: string;
    displayName?: string;
    email?: string;
    role?: string;
    status?: string;
    created?: string;
    updated?: string;
    [key: string]: unknown;
  }[];
};

/**
 * Lists users in a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @returns {Promise<ListUsersReturnType>} A promise resolving to the list of users.
 */
export default async function createUserLister(
  apiKey: APIKey,
  tailnet: string
): Promise<ListUsersReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/users`,
    apiKey
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation users.listTailnetUsers with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as ListUsersReturnType;
}
