import { APIKey } from "../../types";
export type GetDevicePostureAttributesReturnType = {
    attributes: {
        [attribute: string]: string | number | boolean;
    };
    expiry: {
        [attribute: string]: string;
    };
};
/**
 * Retrieves the posture attributes and their expiries for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose posture attributes to retrieve
 * @returns {Promise<GetDevicePostureAttributesReturnType>} A promise resolving to an object with device posture attributes and their expiries
 * @throws {Error} If the API request fails
 */
export default function createDevicePostureAttributesRetriever(apiKey: APIKey, deviceID: string): Promise<GetDevicePostureAttributesReturnType>;
