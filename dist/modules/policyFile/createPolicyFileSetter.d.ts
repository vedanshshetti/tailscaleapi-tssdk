import { APIKey, GetPolicyFileReturnType, IPAddress } from "../../types";
export type SetPolicyFileBody = {
    acls: [
        {
            action: string;
            ports: string[];
            users: string[];
        }
    ];
    groups: Record<string, string[]>;
    hosts: Record<string, IPAddress>;
};
/**
 * Sets or updates the policy file (ACL configuration) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to set the policy file
 * @param body - The new policy file configuration containing ACLs, groups, and hosts
 * @returns {Promise<GetPolicyFileReturnType>} A promise resolving to the updated policy file object
 * @throws {Error} If the API request fails
 */
export default function createPolicyFileSetter(apiKey: APIKey, tailnet: string, body: SetPolicyFileBody): Promise<GetPolicyFileReturnType>;
