import { APIKey, GetDevicePostureAttributesReturnType, ISO8601TimeStamp } from "../../types";
export type SetCustomDevicePostureAttributesBody = {
    name: string;
    comment?: string;
    value: string | number | boolean;
    expiry?: ISO8601TimeStamp;
};
/**
 * Sets or updates a custom device posture attribute for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to set the posture attribute on
 * @param attribute - The posture attribute object containing name, value, optional comment and expiry
 * @returns {Promise<GetDevicePostureAttributesReturnType>} A promise resolving to the updated device posture attributes
 * @throws {Error} If the API request fails
 */
export default function createCustomDevicePostureAttributesSetter(apiKey: APIKey, deviceID: string, attribute: SetCustomDevicePostureAttributesBody): Promise<GetDevicePostureAttributesReturnType>;
