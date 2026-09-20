import createDevicesInterface from "./components/deviceInterface";
import createDNSInterface from "./components/dnsInterface";
import createKeysInterface from "./components/keysInterface";
import createPolicyFileInterface from "./components/policyFileInterface";
import { APIKey } from "./types";

/**
 * Main Tailscale API SDK factory function.
 * Creates an interface for interacting with the Tailscale API v2.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @returns {Object} An object with methods for different Tailscale API sections:
 *   - devices(deviceID): Device management operations
 *   - policyFile(tailnet): Policy file (ACL) operations
 *   - keys(tailnet): Key management operations
 *   - dns(tailnet): DNS configuration operations
 *
 * @example
 * ```typescript
 * import TailscaleInterface from '@vedanshshetti/tailscale-api-wrapper';
 *
 * const api = TailscaleInterface('tskey-api-xxxxxxxx');
 *
 * // List devices
 * const devices = await api.devices('device-id-123').listTailnetDevices('my-tailnet');
 *
 * // Get policy file
 * const policy = await api.policyFile('my-tailnet').getPolicyFile();
 * ```
 */
const TailscaleInterface = (apiKey: APIKey) => {
  return {
    /**
     * Creates a device interface for managing devices in a tailnet.
     *
     * @param deviceID - The unique identifier of a specific device
     * @returns {Object} Device management methods
     */
    devices: (deviceID: string) => createDevicesInterface(apiKey, deviceID),
    /**
     * Creates a policy file interface for managing ACLs in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Policy file management methods
     */
    policyFile: (tailnet: string) => createPolicyFileInterface(apiKey, tailnet),
    /**
     * Creates a keys interface for managing API keys in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Key management methods
     */
    keys: (tailnet: string) => createKeysInterface(apiKey, tailnet),
    /**
     * Creates a DNS interface for managing DNS settings in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} DNS management methods
     */
    dns: (tailnet: string) => createDNSInterface(apiKey, tailnet)
  };
};

export default TailscaleInterface;
