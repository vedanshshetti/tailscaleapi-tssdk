import { APIKey } from "../../types";
/**
 * Restores a suspended user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is restored.
 */
export default function createUserRestorer(apiKey: APIKey, userID: string): Promise<void>;
