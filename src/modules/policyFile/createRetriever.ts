import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, IPAddress } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type GetPolicyFileReturnType = {
  acls: [
    {
      action: string;
      ports: string[];
      users: string[];
    }
  ];
  groups: Record<string, `${string}@${string}`[]>;
  hosts: Record<string, IPAddress>;
};

/**
 * Retrieves the policy file (ACL configuration) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to retrieve the policy file
 * @returns {Promise<GetPolicyFileReturnType>} A promise resolving to an object containing ACLs, groups, and hosts
 * @throws {Error} If the API request fails
 */
export default async function createRetriever(
  apiKey: APIKey,
  tailnet: string
): Promise<GetPolicyFileReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/acl`,
    apiKey
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation policyFile.getPolicyFile with API Key ${hideApiKey(apiKey)} and
     Tailnet "${tailnet}" failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as GetPolicyFileReturnType;
}
