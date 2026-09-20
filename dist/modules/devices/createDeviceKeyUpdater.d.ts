import { APIKey } from "../../types";
/**
 * Updates whether a device's key can expire.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose key to update
 * @param keyCanExpire - Boolean value: true if the key can expire, false if it should be disabled
 * @returns {Promise<void>} A promise that resolves when the key expiry setting is successfully updated
 * @throws {Error} If the API request fails
 */
export default function createDeviceKeyUpdater(apiKey: APIKey, deviceID: string, keyCanExpire: boolean): Promise<void>;
