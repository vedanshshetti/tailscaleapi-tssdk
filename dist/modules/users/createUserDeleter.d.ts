import { APIKey } from "../../types";
/**
 * Deletes a user from the tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is deleted.
 */
export default function createUserDeleter(apiKey: APIKey, userID: string): Promise<void>;
