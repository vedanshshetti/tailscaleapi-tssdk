import { APIKey, IPAddress } from "../../types";
/**
 * Sets or changes the IPv4 address of a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose IPv4 address to set
 * @param ipv4Address - The new IPv4 address (must be in the 100.x.x.x range)
 * @returns {Promise<void>} A promise that resolves when the IPv4 address is successfully updated
 * @throws {Error} If the API request fails
 */
export default function createDeviceIPV4AddrSetter(apiKey: APIKey, deviceID: string, ipv4Address: IPAddress): Promise<void>;
