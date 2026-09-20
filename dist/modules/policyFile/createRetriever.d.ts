import { APIKey, IPAddress } from "../../types";
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
export default function createRetriever(apiKey: APIKey, tailnet: string): Promise<GetPolicyFileReturnType>;
