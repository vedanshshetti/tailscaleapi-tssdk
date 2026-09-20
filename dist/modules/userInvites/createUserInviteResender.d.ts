import { APIKey, TailscaleUserInvite } from "../../types";
/**
 * Resends a user invite by ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param inviteID - The invite ID.
 * @returns {Promise<TailscaleUserInvite>} A promise resolving to the resent invite.
 */
export default function createUserInviteResender(apiKey: APIKey, inviteID: string): Promise<TailscaleUserInvite>;
