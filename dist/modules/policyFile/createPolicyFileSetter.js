import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Sets or updates the policy file (ACL configuration) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to set the policy file
 * @param body - The new policy file configuration containing ACLs, groups, and hosts
 * @returns {Promise<GetPolicyFileReturnType>} A promise resolving to the updated policy file object
 * @throws {Error} If the API request fails
 */
export default async function createPolicyFileSetter(apiKey, tailnet, body) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/acl`, apiKey, { method: "POST", body: JSON.stringify(body) }, true);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation policyFile.setPolicyFile with API Key ${hideApiKey(apiKey)} and
     Tailnet "${tailnet}" failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createPolicyFileSetter.js.map