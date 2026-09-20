import { APIKey, GetPolicyFileReturnType, IPAddressWithPort, PreviewRuleMatchesReturnType, SetPolicyFileBody, ValidateAndTestPolicyFileBody, ValidateAndTestPolicyFileReturnType } from "../types";
/**
 * Creates an interface for managing policy files (ACLs) in the Tailscale API.
 * This provides methods for policy file operations including retrieval, updates, validation, and testing.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to manage the policy file
 * @returns {Object} An object with methods for policy file management
 */
declare const createPolicyFileInterface: (apiKey: APIKey, tailnet: string) => {
    /**
     * Retrieves the policy file (ACL configuration) for the given tailnet.
     *
     * @returns {Promise<GetPolicyFileReturnType>} A promise resolving to an object containing ACLs, groups, and hosts
     * @throws {Error} If the API request fails
     */
    getPolicyFile: () => Promise<GetPolicyFileReturnType>;
    /**
     * Sets or updates the policy file (ACL configuration) for the given tailnet.
     *
     * @param body - The new policy file configuration containing ACLs, groups, and hosts
     * @returns {Promise<GetPolicyFileReturnType>} A promise resolving to the updated policy file object
     * @throws {Error} If the API request fails
     */
    setPolicyFile: (body: SetPolicyFileBody) => Promise<GetPolicyFileReturnType>;
    /**
     * Previews rule matches for a given user or IP:port combination against the policy file.
     *
     * @param body - The policy file configuration to test against
     * @param type - Either "user" or "ipport" depending on whether 'previewFor' is a user or an IP:port string
     * @param previewFor - Either a user email address (format: user@domain) or an IP:port string
     * @returns {Promise<PreviewRuleMatchesReturnType>} A promise resolving to rule match information
     * @throws {Error} If the API request fails
     */
    previewRuleMatches: (body: SetPolicyFileBody, type: "user" | "ipport", previewFor: `${string}@${string}` | IPAddressWithPort) => Promise<PreviewRuleMatchesReturnType>;
    /**
     * Validates and tests a policy file configuration.
     *
     * @param body - An array of ACL test configurations to validate
     * @returns {Promise<ValidateAndTestPolicyFileReturnType>} A promise resolving to validation results or an empty object if validation passes
     * @throws {Error} If the API request fails
     */
    validateAndTestPolicyFile: (body: ValidateAndTestPolicyFileBody) => Promise<ValidateAndTestPolicyFileReturnType>;
};
export default createPolicyFileInterface;
