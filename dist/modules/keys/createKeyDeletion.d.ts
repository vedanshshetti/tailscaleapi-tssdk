import { APIKey } from "../../types";
/**
 * Deletes a key (auth key, API access token, or trust credential) by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which the key exists
 * @param keyID - The unique identifier of the key to delete
 * @returns {Promise<void>} A promise that resolves when the key is successfully deleted
 * @throws {Error} If the API request fails
 */
export default function createKeyDeletion(apiKey: APIKey, tailnet: string, keyID: string): Promise<void>;
