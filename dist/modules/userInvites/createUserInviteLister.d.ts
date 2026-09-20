import { APIKey } from "../../types";
export type ListUserInvitesReturnType = {
    userInvites: {
        id?: string;
        email?: string;
        created?: string;
        expires?: string;
        inviter?: string;
        status?: string;
        [key: string]: unknown;
    }[];
};
/**
 * Lists user invites for a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @returns {Promise<ListUserInvitesReturnType>} A promise resolving to the invite list.
 */
export default function createUserInviteLister(apiKey: APIKey, tailnet: string): Promise<ListUserInvitesReturnType>;
