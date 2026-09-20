import { APIKey } from "../../types";
/**
 * Authorizes or unauthorizes a device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to authorize/unauthorize
 * @param authorized - Boolean value: true to authorize, false to unauthorize
 * @returns {Promise<void>} A promise that resolves when the authorization is successfully updated
 * @throws {Error} If the API request fails
 */
export default function createDeviceAuthorizer(apiKey: APIKey, deviceID: string, authorized: boolean): Promise<void>;
