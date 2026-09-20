import createCustomDeviceBatchPostureAttributesUpdater from "../modules/devices/createCustomDeviceBatchPostureAttributesUpdater";
import createCustomDevicePostureAttributesDeletion from "../modules/devices/createCustomDevicePostureAttributesDeletion";
import createCustomDevicePostureAttributesSetter from "../modules/devices/createCustomDevicePostureAttributesSetter";
import createDeviceAuthorizer from "../modules/devices/createDeviceAuthorizer";
import createDeviceDeletion from "../modules/devices/createDeviceDeletion";
import createDeviceIPV4AddrSetter from "../modules/devices/createDeviceIPV4AddrSetter";
import createDeviceKeyExpiry from "../modules/devices/createDeviceKeyExpiry";
import createDeviceKeyUpdater from "../modules/devices/createDeviceKeyUpdater";
import createDeviceLister from "../modules/devices/createDeviceLister";
import createDeviceNameSetter from "../modules/devices/createDeviceNameSetter";
import createDevicePostureAttributesRetriever from "../modules/devices/createDevicePostureAttributesRetriever";
import createDeviceRetriever from "../modules/devices/createDeviceRetriever";
import createDeviceRouteLister from "../modules/devices/createDeviceRouteLister";
import createDeviceRouteSetter from "../modules/devices/createDeviceRouteSetter";
import createDeviceTagsSetter from "../modules/devices/createDeviceTagSetter";
/**
 * Creates an interface for managing devices in the Tailscale API.
 * This provides methods for device operations including retrieval, updates, authorization, and more.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of a specific device
 * @returns {Object} An object with methods for device management
 */
const createDevicesInterface = (apiKey, deviceID) => {
    return {
        /**
         * Lists all devices for a given tailnet.
         *
         * @param tailnet - The tailnet name for which devices should be listed
         * @returns {Promise<ListTailnetDevicesReturnType>} A promise resolving to an object containing an array of device objects
         * @throws {Error} If the API request fails
         */
        listTailnetDevices: (tailnet) => createDeviceLister(apiKey, tailnet),
        /**
         * Gets the device information for the device with the given device ID.
         *
         * @returns {Promise<GetDeviceReturnType>} A promise resolving to the device object
         * @throws {Error} If the API request fails
         */
        getDevice: () => createDeviceRetriever(apiKey, deviceID),
        /**
         * Updates custom device posture attributes in batch for the device with the given device ID.
         *
         * @param body - Request body containing nodes with posture attributes to update
         * @returns {Promise<void>} A promise that resolves when the posture attributes are successfully updated
         * @throws {Error} If the API request fails
         */
        batchUpdateCustomDevicePostureAttributes: (body) => createCustomDeviceBatchPostureAttributesUpdater(apiKey, deviceID, body),
        /**
         * Deletes the device with the given device ID.
         *
         * @returns {Promise<void>} A promise that resolves when the device is successfully deleted
         * @throws {Error} If the API request fails
         */
        deleteDevice: () => createDeviceDeletion(apiKey, deviceID),
        /**
         * Expires the device key for the device with the given device ID.
         *
         * @returns {Promise<void>} A promise that resolves when the device key is successfully expired
         * @throws {Error} If the API request fails
         */
        expireDeviceKey: () => createDeviceKeyExpiry(apiKey, deviceID),
        /**
         * Lists all routes (advertised and enabled) for the device with the given device ID.
         *
         * @returns {Promise<ListDeviceRoutesReturnType>} A promise resolving to an object containing advertised and enabled routes
         * @throws {Error} If the API request fails
         */
        listDeviceRoutes: () => createDeviceRouteLister(apiKey, deviceID),
        /**
         * Sets the device routes for the device with the given device ID.
         *
         * @param body - The new routes configuration
         * @returns {Promise<SetDeviceRoutesReturnType>} A promise resolving to an object containing the newly updated routes
         * @throws {Error} If the API request fails
         */
        setDeviceRoutes: (body) => createDeviceRouteSetter(apiKey, deviceID, body),
        /**
         * Changes the authorization status for the device with the given device ID.
         *
         * @param authorized - Boolean value: true to authorize the device, false to unauthorize
         * @returns {Promise<void>} A promise that resolves when the authorization is successfully updated
         * @throws {Error} If the API request fails
         */
        authorizeDevice: (authorized) => createDeviceAuthorizer(apiKey, deviceID, authorized),
        /**
         * Sets or changes the name for the device with the given device ID.
         *
         * @param name - The new name to set for the device
         * @returns {Promise<void>} A promise that resolves when the device name is successfully updated
         * @throws {Error} If the API request fails
         */
        setDeviceName: (name) => createDeviceNameSetter(apiKey, deviceID, name),
        /**
         * Sets or changes the tags for the device with the given device ID.
         *
         * @param tags - An array of tag strings to set on the device
         * @returns {Promise<void>} A promise that resolves when the device tags are successfully updated
         * @throws {Error} If the API request fails
         */
        setDeviceTags: (tags) => createDeviceTagsSetter(apiKey, deviceID, tags),
        /**
         * Updates whether the device key can expire for the device with the given device ID.
         *
         * @param canKeyExpire - Boolean value: true if the key can expire, false if it should be disabled
         * @returns {Promise<void>} A promise that resolves when the key expiry setting is successfully updated
         * @throws {Error} If the API request fails
         */
        updateDeviceKey: (canKeyExpire) => createDeviceKeyUpdater(apiKey, deviceID, canKeyExpire),
        /**
         * Sets or changes the IPv4 address for the device with the given device ID.
         *
         * @param ipv4 - The new IPv4 address (must be in the 100.x.x.x range)
         * @returns {Promise<void>} A promise that resolves when the IPv4 address is successfully updated
         * @throws {Error} If the API request fails
         */
        setDeviceIPV4Address: (ipv4) => createDeviceIPV4AddrSetter(apiKey, deviceID, ipv4),
        /**
         * Retrieves the posture attributes and their expiries for the device with the given device ID.
         *
         * @returns {Promise<GetDevicePostureAttributesReturnType>} A promise resolving to an object with device posture attributes and their expiries
         * @throws {Error} If the API request fails
         */
        getDevicePostureAttributes: () => createDevicePostureAttributesRetriever(apiKey, deviceID),
        /**
         * Sets or updates a custom device posture attribute for the device with the given device ID.
         *
         * @param attribute - The posture attribute object containing name, value, optional comment and expiry
         * @returns {Promise<GetDevicePostureAttributesReturnType>} A promise resolving to the updated device posture attributes
         * @throws {Error} If the API request fails
         */
        setCustomDevicePostureAttributes: (attribute) => createCustomDevicePostureAttributesSetter(apiKey, deviceID, attribute),
        /**
         * Deletes a custom device posture attribute for the device with the given device ID.
         *
         * @param attributeKey - The key of the attribute to delete
         * @returns {Promise<void>} A promise that resolves when the posture attribute is successfully deleted
         * @throws {Error} If the API request fails
         */
        deleteCustomDevicePostureAttributes: (attributeKey) => createCustomDevicePostureAttributesDeletion(apiKey, deviceID, attributeKey)
    };
};
export default createDevicesInterface;
//# sourceMappingURL=deviceInterface.js.map