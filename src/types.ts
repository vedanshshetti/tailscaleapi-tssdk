// Global Types

/**
 * A Tailscale API key type that must start with 'tskey-api-'
 */
export type APIKey = `tskey-api-${string}`;

/**
 * A route in CIDR notation (e.g., "192.168.0.0/24")
 */
export type Route = `${number}.${number}.${number}.${number}/${number}`;

/**
 * A single digit from 0-9
 */
type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

/**
 * A DNS nameserver address (IP address or hostname)
 */
export type DNSNameserver = `${number}.${number}.${number}.${number}` | string;

/**
 * A Tailscale IP address in the 100.x.x.x range
 */
export type IPAddress = `100.${number}.${number}.${number}`;

/**
 * A Tailscale IP address with port number
 */
export type IPAddressWithPort = `${IPAddress}:${number}`;

/**
 * An ISO 8601 timestamp in a specific format (e.g., "2024-01-15T15:30:45Z")
 */
export type ISO8601TimeStamp =
  `${number}-${number}-${number}T15:${Digit}${Digit}:${Digit}${Digit}Z`;

/**
 * Generic shape for records returned by the Tailscale API when the schema is large or dynamic.
 */
export type TailscaleRecord = Record<string, unknown>;

/**
 * A Tailscale user role.
 */
export type UserRole = "owner" | "admin" | "member" | "auditor" | string;

/**
 * A user record returned by the Tailscale API.
 */
export type TailscaleUser = {
  id?: string;
  loginName?: string;
  displayName?: string;
  email?: string;
  role?: UserRole;
  status?: string;
  created?: string;
  updated?: string;
  [key: string]: unknown;
};

/**
 * A user invite record returned by the Tailscale API.
 */
export type TailscaleUserInvite = {
  id?: string;
  email?: string;
  created?: string;
  expires?: string;
  inviter?: string;
  status?: string;
  [key: string]: unknown;
};

/**
 * A device invite record returned by the Tailscale API.
 */
export type DeviceInvite = {
  id?: string;
  deviceId?: string;
  email?: string;
  created?: string;
  expires?: string;
  status?: string;
  [key: string]: unknown;
};

/**
 * A posture integration record returned by the Tailscale API.
 */
export type PostureIntegration = TailscaleRecord;

/**
 * A contact record returned by the Tailscale API.
 */
export type TailscaleContact = TailscaleRecord;

/**
 * A webhook record returned by the Tailscale API.
 */
export type TailscaleWebhook = TailscaleRecord;

/**
 * A tailnet settings object returned by the Tailscale API.
 */
export type TailnetSettings = TailscaleRecord;

/**
 * A service definition returned by the Tailscale API.
 */
export type TailscaleService = TailscaleRecord;

/**
 * OAuth app details returned by the Tailscale API.
 */
export type OAuthApp = TailscaleRecord;

/**
 * A device invite list returned by the Tailscale API.
 */
export type ListDeviceInvitesReturnType = {
  deviceInvites: DeviceInvite[];
};

/**
 *A list of Tailscale users returned by the Tailscale API.
 */
export type ListUsersReturnType = {
  users: TailscaleUser[];
};

/**
 * A list of user invites returned by the Tailscale API.
 */
export type ListUserInvitesReturnType = {
  userInvites: TailscaleUserInvite[];
};

/**
 * A list of posture integrations returned by the Tailscale API.
 */
export type ListPostureIntegrationsReturnType = {
  postureIntegrations: PostureIntegration[];
};

/**
 * A list of contacts returned by the Tailscale API.
 */
export type ListContactsReturnType = {
  contacts: TailscaleContact[];
};

/**
 * A list of webhooks returned by the Tailscale API.
 */
export type ListWebhooksReturnType = {
  webhooks: TailscaleWebhook[];
};

/**
 * A list of services returned by the Tailscale API.
 */
export type ListServicesReturnType = {
  services: TailscaleService[];
};

/**
 * A list of OAuth apps returned by the Tailscale API.
 */
export type ListOAuthAppsReturnType = {
  oauthApps: OAuthApp[];
};

/**
 * A list of tailnets returned by the organization endpoint.
 */
export type ListOrganizationTailnetsReturnType = {
  tailnets: Array<TailscaleRecord>;
};

// Types for Device Interface
export type { ListTailnetDevicesReturnType } from "./modules/devices/createDeviceLister";
export type { GetDeviceReturnType } from "./modules/devices/createDeviceRetriever";
export type { ListDeviceRoutesReturnType } from "./modules/devices/createDeviceRouteLister";
export type { UpdateCustomDevicePostureAttributesBody } from "./modules/devices/createCustomDeviceBatchPostureAttributesUpdater";
export type {
  SetDeviceRoutesReturnType,
  SetDeviceRoutesBody
} from "./modules/devices/createDeviceRouteSetter";
export type { GetDevicePostureAttributesReturnType } from "./modules/devices/createDevicePostureAttributesRetriever";
export type { SetCustomDevicePostureAttributesBody } from "./modules/devices/createCustomDevicePostureAttributesSetter";

// Types for Policy File Interface
export type { GetPolicyFileReturnType } from "./modules/policyFile/createRetriever";
export type { SetPolicyFileBody } from "./modules/policyFile/createPolicyFileSetter";
export type { PreviewRuleMatchesReturnType } from "./modules/policyFile/createPreviewRuleMatches";
export type {
  ValidateAndTestPolicyFileBody,
  ValidateAndTestPolicyFileReturnType
} from "./modules/policyFile/createPolicyFileValAndTest";

// Types for Keys Interface
export type { ListTailnetKeysReturnType } from "./modules/keys/createTailnetKeysList";
export type { TailscaleKey } from "./modules/keys/createKeyCreation";
export type { SetKeyBody } from "./modules/keys/createKeySetter";

// Types for DNS Interface
export type { ListNameserversReturnType } from "./modules/dns/createDNSNameserverLister";
export type { SetNameserversReturnType } from "./modules/dns/createDNSNameserverSetter";
export type { GetDNSPreferencesReturnType } from "./modules/dns/createDNSPreferencesRetriever";
export type { SetDNSPreferencesReturnType } from "./modules/dns/createDNSPreferencesSetter";
export type { ListDNSSearchpathsReturnType } from "./modules/dns/createSearchpathsLister";
export type { SetSearchpathsReturnType } from "./modules/dns/createSearchpathsSetter";
