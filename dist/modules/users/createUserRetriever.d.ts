import { APIKey, TailscaleUser } from "../../types";
/**
 * Retrieves a single user record.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @returns {Promise<TailscaleUser>} A promise resolving to the user record.
 */
export default function createUserRetriever(apiKey: APIKey, userID: string): Promise<TailscaleUser>;
