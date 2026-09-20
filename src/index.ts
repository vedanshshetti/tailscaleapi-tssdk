import createAWSExternalIDInterface from "./components/awsExternalIdInterface";
import createDevicesInterface from "./components/deviceInterface";
import createDeviceInvitesInterface from "./components/deviceInviteInterface";
import createDNSInterface from "./components/dnsInterface";
import createKeysInterface from "./components/keysInterface";
import createLoggingInterface from "./components/loggingInterface";
import createOrganizationsInterface from "./components/organizationInterface";
import createPolicyFileInterface from "./components/policyFileInterface";
import createPostureInterface from "./components/postureInterface";
import createTailnetSettingsInterface from "./components/tailnetSettingsInterface";
import createUserInvitesInterface from "./components/userInviteInterface";
import createUsersInterface from "./components/userInterface";
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
 *   - users(tailnet): User management operations
 *   - userInvites(tailnet): User invite management operations
 *   - deviceInvites(deviceID): Device invite management operations
 *   - posture(tailnet): Device posture, contacts, and webhook operations
 *   - tailnetSettings(tailnet): Tailnet settings and service management
 *   - organizations(org): Organization and tailnet management
 *   - logging(tailnet): Logging configuration and stream management
 *   - awsExternalID(tailnet): AWS external ID helpers
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
    dns: (tailnet: string) => createDNSInterface(apiKey, tailnet),
    /**
     * Creates a user interface for managing users in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} User management methods
     */
    users: (tailnet: string) => createUsersInterface(apiKey, tailnet),
    /**
     * Creates a user invite interface for managing invitations in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} User invite management methods
     */
    userInvites: (tailnet: string) =>
      createUserInvitesInterface(apiKey, tailnet),
    /**
     * Creates a device invite interface for managing device invitations.
     *
     * @param deviceID - The device ID to manage invites for
     * @returns {Object} Device invite management methods
     */
    deviceInvites: (deviceID: string) =>
      createDeviceInvitesInterface(apiKey, deviceID),
    /**
     * Creates a posture interface for managing posture integrations, contacts, and webhooks.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Posture management methods
     */
    posture: (tailnet: string) => createPostureInterface(apiKey, tailnet),
    /**
     * Creates a tailnet settings interface for managing settings, services, and OAuth apps.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Tailnet settings management methods
     */
    tailnetSettings: (tailnet: string) =>
      createTailnetSettingsInterface(apiKey, tailnet),
    /**
     * Creates an organization interface for managing organizations and tailnets.
     *
     * @param organization - The organization slug or ID
     * @returns {Object} Organization management methods
     */
    organizations: (organization: string) =>
      createOrganizationsInterface(apiKey, organization),
    /**
     * Creates a logging interface for tailnet log configuration and stream operations.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Logging management methods
     */
    logging: (tailnet: string) => createLoggingInterface(apiKey, tailnet),
    /**
     * Creates an AWS external ID interface for trust-policy validation.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} AWS external ID helper methods
     */
    awsExternalID: (tailnet: string) =>
      createAWSExternalIDInterface(apiKey, tailnet)
  };
};

export default TailscaleInterface;
