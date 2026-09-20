import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type ValidateAndTestPolicyFileBody = {
  src: `${string}@${string}`;
  accept: string[];
  deny: string[];
  proto?: string;
  srcPostureAttrs?: Record<string, string | number | boolean>;
}[];

export type ValidateAndTestPolicyFileReturnType =
  | {
      message: string;
      data: [
        {
          user: `${string}@${string}`;
          errors: string[];
        }
      ];
    }
  | {};

/**
 * Validates and tests a policy file configuration.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to validate the policy
 * @param body - An array of ACL test configurations to validate
 * @returns {Promise<ValidateAndTestPolicyFileReturnType>} A promise resolving to validation results or an empty object if validation passes
 * @throws {Error} If the API request fails
 */
export default async function createPolicyFileValAndTest(
  apiKey: APIKey,
  tailnet: string,
  body: ValidateAndTestPolicyFileBody
): Promise<ValidateAndTestPolicyFileReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/acl/validate`,
    apiKey,
    { method: "POST", body: JSON.stringify(body) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation policyFile.validateAndTestPolicyFile with API Key ${hideApiKey(apiKey)} and
     Tailnet "${tailnet}" failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as ValidateAndTestPolicyFileReturnType;
}
