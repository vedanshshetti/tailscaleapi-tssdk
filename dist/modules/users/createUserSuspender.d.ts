import { APIKey } from "../../types";
/**
 * Suspends a user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<void>} A promise resolving when the user is suspended.
 */
export default function createUserSuspender(apiKey: APIKey, userID: string): Promise<void>;
