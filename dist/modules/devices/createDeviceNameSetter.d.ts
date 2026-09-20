import { APIKey } from "../../types";
/**
 * Sets or changes the name of a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to rename
 * @param name - The new name to set for the device
 * @returns {Promise<void>} A promise that resolves when the device name is successfully updated
 * @throws {Error} If the API request fails
 */
export default function createDeviceNameSetter(apiKey: APIKey, deviceID: string, name: string): Promise<void>;
