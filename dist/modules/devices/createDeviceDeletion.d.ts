import { APIKey } from "../../types";
/**
 * Deletes a specific device by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to delete
 * @returns {Promise<void>} A promise that resolves when the device is successfully deleted
 * @throws {Error} If the API request fails
 */
export default function createDeviceDeletion(apiKey: APIKey, deviceID: string): Promise<void>;
