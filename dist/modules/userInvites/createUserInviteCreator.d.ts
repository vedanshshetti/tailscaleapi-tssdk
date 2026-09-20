import { APIKey, TailscaleUserInvite } from "../../types";
/**
 * Creates a user invite for a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @param body - The invite payload.
 * @returns {Promise<TailscaleUserInvite>} A promise resolving to the created invite.
 */
export default function createUserInviteCreator(apiKey: APIKey, tailnet: string, body: Record<string, unknown>): Promise<TailscaleUserInvite>;
