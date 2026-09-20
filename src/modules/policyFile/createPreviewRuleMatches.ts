import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, IPAddressWithPort, SetPolicyFileBody } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type PreviewRuleMatchesReturnType = {
  matches: [
    {
      users: string[];
      ports: string[];
      lineNumber: number;
    }
  ];
  type: "user" | "ipport";
  previewFor: `${string}@${string}`;
};

/**
 * Previews rule matches for a given user or IP:port combination against the policy file.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to preview rule matches
 * @param body - The policy file configuration to test against
 * @param queryString - Query parameters containing type ('user' or 'ipport') and previewFor (user email or IP:port)
 * @returns {Promise<PreviewRuleMatchesReturnType>} A promise resolving to rule match information
 * @throws {Error} If the API request fails
 */
export default async function createPreviewRuleMatches(
  apiKey: APIKey,
  tailnet: string,
  body: SetPolicyFileBody,
  queryString: `?type=${"user" | "ipport"}&previewFor=${IPAddressWithPort | `${string}@${string}`}`
): Promise<PreviewRuleMatchesReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/acl/preview${queryString}`,
    apiKey,
    { method: "POST", body: JSON.stringify(body) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation policyFile.previewRuleMatches with API Key ${hideApiKey(apiKey)} and
     Tailnet "${tailnet}" failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as PreviewRuleMatchesReturnType;
}
