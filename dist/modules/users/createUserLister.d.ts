import { APIKey } from "../../types";
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
export default function createUserLister(apiKey: APIKey, tailnet: string): Promise<ListUsersReturnType>;
