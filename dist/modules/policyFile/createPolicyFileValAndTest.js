import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Validates and tests a policy file configuration.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to validate the policy
 * @param body - An array of ACL test configurations to validate
 * @returns {Promise<ValidateAndTestPolicyFileReturnType>} A promise resolving to validation results or an empty object if validation passes
 * @throws {Error} If the API request fails
 */
export default async function createPolicyFileValAndTest(apiKey, tailnet, body) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/acl/validate`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation policyFile.validateAndTestPolicyFile with API Key ${hideApiKey(apiKey)} and
     Tailnet "${tailnet}" failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createPolicyFileValAndTest.js.map