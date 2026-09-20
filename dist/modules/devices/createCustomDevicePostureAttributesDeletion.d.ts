import { APIKey } from "../../types";
/**
 * Deletes a custom device posture attribute from a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device from which to delete the posture attribute
 * @param attributeKey - The key of the attribute to delete
 * @returns {Promise<void>} A promise that resolves when the posture attribute is successfully deleted
 * @throws {Error} If the API request fails
 */
export default function createCustomDevicePostureAttributesDeletion(apiKey: APIKey, deviceID: string, attributeKey: string): Promise<void>;
