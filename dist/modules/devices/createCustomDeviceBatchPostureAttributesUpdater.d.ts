import { APIKey, ISO8601TimeStamp } from "../../types";
export type UpdateCustomDevicePostureAttributesBody = {
    comment?: string;
    nodes: Record<string, {
        [propertyName: string]: {
            value: string | number | boolean;
            expiry?: ISO8601TimeStamp;
        };
    }>;
};
/**
 * Updates custom device posture attributes in batch for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose posture attributes to update
 * @param body - An object containing nodes with posture attributes to update
 * @returns {Promise<void>} A promise that resolves when the posture attributes are successfully updated
 * @throws {Error} If the API request fails
 */
export default function createCustomDeviceBatchPostureAttributesUpdater(apiKey: APIKey, deviceID: string, body: UpdateCustomDevicePostureAttributesBody): Promise<void>;
