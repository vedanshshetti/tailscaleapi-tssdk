import { APIKey, Route } from "../../types";
export type SetDeviceRoutesBody = {
    routes: Route[];
};
export type SetDeviceRoutesReturnType = {
    advertisedRoutes: Route[];
    enabledRoutes: Route[];
};
/**
 * Sets or updates the routes for a specific device.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device whose routes to set
 * @param body - An object containing the routes array to be set
 * @returns {Promise<SetDeviceRoutesReturnType>} A promise resolving to an object containing the newly updated routes
 * @throws {Error} If the API request fails
 */
export default function createDeviceRouteSetter(apiKey: APIKey, deviceID: string, body: SetDeviceRoutesBody): Promise<SetDeviceRoutesReturnType>;
