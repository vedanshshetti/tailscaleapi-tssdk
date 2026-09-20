import { APIKey } from "../../types";
/**
 * Deletes a user invite.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param inviteID - The invite ID.
 * @returns {Promise<void>} A promise resolving when the invite is deleted.
 */
export default function createUserInviteDeleter(apiKey: APIKey, inviteID: string): Promise<void>;
