import { APIKey, Route } from "../../types";
export type ListDeviceRoutesReturnType = {
    advertisedRoutes: Route[];
    enabledRoutes: Route[];
};
/**
 * Lists all routes (advertised and enabled) for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose routes to list
 * @returns {Promise<ListDeviceRoutesReturnType>} A promise resolving to an object containing advertised and enabled routes
 * @throws {Error} If the API request fails
 */
export default function createDeviceRouteLister(apiKey: APIKey, deviceID: string): Promise<ListDeviceRoutesReturnType>;
