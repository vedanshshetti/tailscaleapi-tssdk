import { APIKey } from "../../types";
/**
 * Expires the device key for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose key to expire
 * @returns {Promise<void>} A promise that resolves when the device key is successfully expired
 * @throws {Error} If the API request fails
 */
export default function createDeviceKeyExpiry(apiKey: APIKey, deviceID: string): Promise<void>;
