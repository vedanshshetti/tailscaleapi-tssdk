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
declare const TailscaleInterface: (apiKey: APIKey) => {
    /**
     * Creates a device interface for managing devices in a tailnet.
     *
     * @param deviceID - The unique identifier of a specific device
     * @returns {Object} Device management methods
     */
    devices: (deviceID: string) => {
        listTailnetDevices: (tailnet: string) => Promise<import("./types").ListTailnetDevicesReturnType>;
        getDevice: () => Promise<import("./types").GetDeviceReturnType>;
        batchUpdateCustomDevicePostureAttributes: (body: import("./types").UpdateCustomDevicePostureAttributesBody) => Promise<void>;
        deleteDevice: () => Promise<void>;
        expireDeviceKey: () => Promise<void>;
        listDeviceRoutes: () => Promise<import("./types").ListDeviceRoutesReturnType>;
        setDeviceRoutes: (body: import("./types").SetDeviceRoutesBody) => Promise<import("./types").SetDeviceRoutesReturnType>;
        authorizeDevice: (authorized: boolean) => Promise<void>;
        setDeviceName: (name: string) => Promise<void>;
        setDeviceTags: (tags: string[]) => Promise<void>;
        updateDeviceKey: (canKeyExpire: boolean) => Promise<void>;
        setDeviceIPV4Address: (ipv4: import("./types").IPAddress) => Promise<void>;
        getDevicePostureAttributes: () => Promise<import("./types").GetDevicePostureAttributesReturnType>;
        setCustomDevicePostureAttributes: (attribute: import("./types").SetCustomDevicePostureAttributesBody) => Promise<import("./types").GetDevicePostureAttributesReturnType>;
        deleteCustomDevicePostureAttributes: (attributeKey: string) => Promise<void>;
    };
    /**
     * Creates a policy file interface for managing ACLs in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Policy file management methods
     */
    policyFile: (tailnet: string) => {
        getPolicyFile: () => Promise<import("./types").GetPolicyFileReturnType>;
        setPolicyFile: (body: import("./types").SetPolicyFileBody) => Promise<import("./types").GetPolicyFileReturnType>;
        previewRuleMatches: (body: import("./types").SetPolicyFileBody, type: "user" | "ipport", previewFor: `${string}@${string}` | import("./types").IPAddressWithPort) => Promise<import("./types").PreviewRuleMatchesReturnType>;
        validateAndTestPolicyFile: (body: import("./types").ValidateAndTestPolicyFileBody) => Promise<import("./types").ValidateAndTestPolicyFileReturnType>;
    };
    /**
     * Creates a keys interface for managing API keys in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Key management methods
     */
    keys: (tailnet: string) => {
        listTailnetKeys: (all: boolean) => Promise<import("./types").ListTailnetKeysReturnType>;
        getKey: (keyID: string) => Promise<import("./types").TailscaleKey>;
        createKey: (body: import("./types").TailscaleKey) => Promise<import("./types").TailscaleKey>;
        deleteKey: (keyID: string) => Promise<void>;
        setKey: (keyID: string, body: import("./types").SetKeyBody) => Promise<import("./types").TailscaleKey>;
    };
    /**
     * Creates a DNS interface for managing DNS settings in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} DNS management methods
     */
    dns: (tailnet: string) => {
        listNameservers: () => Promise<import("./types").ListNameserversReturnType>;
        setNameservers: (newNameservers: import("./types").DNSNameserver[], overrideSafetyGuardrails?: boolean) => Promise<import("./types").SetNameserversReturnType>;
        getPreferences: () => Promise<import("./types").GetDNSPreferencesReturnType>;
        setPreferences: (preferences: {
            magicDNS: boolean;
        }) => Promise<import("./types").SetDNSPreferencesReturnType>;
        listSearchpaths: () => Promise<import("./types").ListDNSSearchpathsReturnType>;
        setSearchpaths: (newSearchpaths: string[]) => Promise<import("./types").SetSearchpathsReturnType>;
        getSplitDNS: () => Promise<Record<string, unknown>>;
        setSplitDNS: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
        getDNSConfiguration: () => Promise<Record<string, unknown>>;
        setDNSConfiguration: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
    };
    /**
     * Creates a user interface for managing users in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} User management methods
     */
    users: (tailnet: string) => {
        listTailnetUsers: () => Promise<import("./modules/users/createUserLister").ListUsersReturnType>;
        getUser: (userID: string) => Promise<import("./types").TailscaleUser>;
        setUserRole: (userID: string, role: import("./types").UserRole) => Promise<import("./types").TailscaleUser>;
        approveUser: (userID: string) => Promise<void>;
        suspendUser: (userID: string) => Promise<void>;
        restoreUser: (userID: string) => Promise<void>;
        deleteUser: (userID: string) => Promise<void>;
    };
    /**
     * Creates a user invite interface for managing invitations in a tailnet.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} User invite management methods
     */
    userInvites: (tailnet: string) => {
        listUserInvites: () => Promise<import("./modules/userInvites/createUserInviteLister").ListUserInvitesReturnType>;
        createUserInvite: (body: Record<string, unknown>) => Promise<import("./types").TailscaleUserInvite>;
        getUserInvite: (inviteID: string) => Promise<import("./types").TailscaleUserInvite>;
        deleteUserInvite: (inviteID: string) => Promise<void>;
        resendUserInvite: (inviteID: string) => Promise<import("./types").TailscaleUserInvite>;
    };
    /**
     * Creates a device invite interface for managing device invitations.
     *
     * @param deviceID - The device ID to manage invites for
     * @returns {Object} Device invite management methods
     */
    deviceInvites: (deviceID: string) => {
        listDeviceInvites: () => Promise<import("./types").ListDeviceInvitesReturnType>;
        createDeviceInvite: (body: Record<string, unknown>) => Promise<import("./types").DeviceInvite>;
        getDeviceInvite: (inviteID: string) => Promise<import("./types").DeviceInvite>;
        deleteDeviceInvite: (inviteID: string) => Promise<void>;
        resendDeviceInvite: (inviteID: string) => Promise<void>;
        acceptDeviceInvite: (inviteID: string) => Promise<void>;
    };
    /**
     * Creates a posture interface for managing posture integrations, contacts, and webhooks.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Posture management methods
     */
    posture: (tailnet: string) => {
        listPostureIntegrations: () => Promise<import("./types").ListPostureIntegrationsReturnType>;
        createPostureIntegration: (body: Record<string, unknown>) => Promise<import("./types").PostureIntegration>;
        getPostureIntegration: (integrationID: string) => Promise<import("./types").PostureIntegration>;
        updatePostureIntegration: (integrationID: string, body: Record<string, unknown>) => Promise<import("./types").PostureIntegration>;
        deletePostureIntegration: (integrationID: string) => Promise<void>;
        listContacts: (contactType: string) => Promise<import("./types").ListContactsReturnType>;
        updateContacts: (contactType: string, body: Record<string, unknown>) => Promise<import("./types").TailscaleContact>;
        resendContactVerificationEmail: (contactType: string) => Promise<void>;
        listWebhooks: () => Promise<import("./types").ListWebhooksReturnType>;
        createWebhook: (body: Record<string, unknown>) => Promise<import("./types").TailscaleWebhook>;
        getWebhook: (endpointID: string) => Promise<import("./types").TailscaleWebhook>;
        updateWebhook: (endpointID: string, body: Record<string, unknown>) => Promise<import("./types").TailscaleWebhook>;
        deleteWebhook: (endpointID: string) => Promise<void>;
        testWebhook: (endpointID: string) => Promise<void>;
        rotateWebhook: (endpointID: string) => Promise<import("./types").TailscaleWebhook>;
    };
    /**
     * Creates a tailnet settings interface for managing settings, services, and OAuth apps.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Tailnet settings management methods
     */
    tailnetSettings: (tailnet: string) => {
        getSettings: () => Promise<import("./types").TailnetSettings>;
        updateSettings: (body: Record<string, unknown>) => Promise<import("./types").TailnetSettings>;
        listServices: () => Promise<import("./types").ListServicesReturnType>;
        listServiceDevices: (serviceName: string) => Promise<Record<string, unknown>>;
        getService: (serviceName: string) => Promise<import("./types").TailscaleService>;
        deleteService: (serviceName: string) => Promise<void>;
        getServiceDeviceApproval: (serviceName: string, deviceID: string) => Promise<boolean>;
        setServiceDeviceApproval: (serviceName: string, deviceID: string, approved: boolean) => Promise<void>;
        listOAuthApps: () => Promise<import("./types").ListOAuthAppsReturnType>;
        createOAuthApp: (body: Record<string, unknown>) => Promise<import("./types").OAuthApp>;
        getOAuthApp: (appID: string) => Promise<import("./types").OAuthApp>;
        deleteOAuthApp: (appID: string) => Promise<void>;
    };
    /**
     * Creates an organization interface for managing organizations and tailnets.
     *
     * @param organization - The organization slug or ID
     * @returns {Object} Organization management methods
     */
    organizations: (organization: string) => {
        listTailnets: () => Promise<import("./types").ListOrganizationTailnetsReturnType>;
        createTailnet: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
        deleteTailnet: () => Promise<void>;
    };
    /**
     * Creates a logging interface for tailnet log configuration and stream operations.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} Logging management methods
     */
    logging: (tailnet: string) => {
        getConfiguration: () => Promise<Record<string, unknown>>;
        getNetworkLog: () => Promise<Record<string, unknown>>;
        getLogStreamStatus: (logType: string) => Promise<Record<string, unknown>>;
        getLogStream: (logType: string) => Promise<Record<string, unknown>>;
        deleteLogStream: (logType: string) => Promise<void>;
    };
    /**
     * Creates an AWS external ID interface for trust-policy validation.
     *
     * @param tailnet - The tailnet name to manage
     * @returns {Object} AWS external ID helper methods
     */
    awsExternalID: (tailnet: string) => {
        getExternalID: () => Promise<Record<string, unknown>>;
        validateAWSTrustPolicy: (id: string, body: Record<string, unknown>) => Promise<Record<string, unknown>>;
    };
};
export default TailscaleInterface;
