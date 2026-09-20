import { APIKey } from "../../types";
/**
 * Approves a pending user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is approved.
 */
export default function createUserApprover(apiKey: APIKey, userID: string): Promise<void>;
