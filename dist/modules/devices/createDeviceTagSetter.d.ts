import { APIKey } from "../../types";
/**
 * Sets or updates the tags for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose tags to set
 * @param tags - An array of tag strings to set on the device
 * @returns {Promise<void>} A promise that resolves when the device tags are successfully updated
 * @throws {Error} If the API request fails
 */
export default function createDeviceTagsSetter(apiKey: APIKey, deviceID: string, tags: string[]): Promise<void>;
