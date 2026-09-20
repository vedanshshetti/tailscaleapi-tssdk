import { APIKey, TailscaleUserInvite } from "../../types";
/**
 * Retrieves a specific user invite.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param inviteID - The invite ID.
 * @returns {Promise<TailscaleUserInvite>} A promise resolving to the invite record.
 */
export default function createUserInviteRetriever(apiKey: APIKey, inviteID: string): Promise<TailscaleUserInvite>;
