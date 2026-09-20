import { APIKey } from "../../types";
export type ValidateAndTestPolicyFileBody = {
    src: `${string}@${string}`;
    accept: string[];
    deny: string[];
    proto?: string;
    srcPostureAttrs?: Record<string, string | number | boolean>;
}[];
export type ValidateAndTestPolicyFileReturnType = {
    message: string;
    data: [
        {
            user: `${string}@${string}`;
            errors: string[];
        }
    ];
} | {};
/**
 * Validates and tests a policy file configuration.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to validate the policy
 * @param body - An array of ACL test configurations to validate
 * @returns {Promise<ValidateAndTestPolicyFileReturnType>} A promise resolving to validation results or an empty object if validation passes
 * @throws {Error} If the API request fails
 */
export default function createPolicyFileValAndTest(apiKey: APIKey, tailnet: string, body: ValidateAndTestPolicyFileBody): Promise<ValidateAndTestPolicyFileReturnType>;
