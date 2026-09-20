import createDNSNameserverLister from "../modules/dns/createDNSNameserverLister";
import createDNSNameserverSetter from "../modules/dns/createDNSNameserverSetter";
import createDNSPreferencesRetriever from "../modules/dns/createDNSPreferencesRetriever";
import createDNSPreferencesSetter from "../modules/dns/createDNSPreferencesSetter";
import createSearchpathsLister from "../modules/dns/createSearchpathsLister";
import createSearchpathsSetter from "../modules/dns/createSearchpathsSetter";
import {
  APIKey,
  DNSNameserver,
  GetDNSPreferencesReturnType,
  ListDNSSearchpathsReturnType,
  ListNameserversReturnType,
  SetDNSPreferencesReturnType,
  SetNameserversReturnType,
  SetSearchpathsReturnType
} from "../types";

/**
 * Creates an interface for managing DNS settings in the Tailscale API.
 * This provides methods for DNS configuration including nameservers, preferences, and search paths.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to manage DNS settings
 * @returns {Object} An object with methods for DNS management
 */
const createDNSInterface = (apiKey: APIKey, tailnet: string) => ({
  /**
   * Lists all active DNS nameservers for the given tailnet.
   *
   * @returns {Promise<ListNameserversReturnType>} A promise resolving to an object containing an array of DNS nameservers
   * @throws {Error} If the API request fails
   */
  listNameservers: (): Promise<ListNameserversReturnType> =>
    createDNSNameserverLister(apiKey, tailnet),
  /**
   * Sets the DNS nameservers for the given tailnet.
   *
   * @param newNameservers - An array of DNS nameserver addresses to set
   * @param overrideSafetyGuardrails - Optional boolean to override safety guardrails (default: false).
   *                                Set to true to allow potentially invalid nameservers like 0.0.0.0.
   *                                Warning: Do not apply this in production systems.
   * @returns {Promise<SetNameserversReturnType>} A promise resolving to an object containing the updated DNS nameservers and magicDNS setting
   * @throws {Error} If the API request fails or if trying to set 0.0.0.0 without overrideSafetyGuardrails
   */
  setNameservers: (
    newNameservers: DNSNameserver[],
    overrideSafetyGuardrails = false
  ): Promise<SetNameserversReturnType> =>
    createDNSNameserverSetter(
      apiKey,
      tailnet,
      newNameservers,
      overrideSafetyGuardrails
    ),
  /**
   * Retrieves the DNS preferences for the given tailnet.
   *
   * @returns {Promise<GetDNSPreferencesReturnType>} A promise resolving to an object containing DNS preferences like magicDNS
   * @throws {Error} If the API request fails
   */
  getPreferences: (): Promise<GetDNSPreferencesReturnType> =>
    createDNSPreferencesRetriever(apiKey, tailnet),
  /**
   * Sets the DNS preferences for the given tailnet.
   *
   * @param preferences - An object containing DNS preferences (currently supports magicDNS boolean)
   * @returns {Promise<SetDNSPreferencesReturnType>} A promise resolving to an object containing the updated DNS preferences
   * @throws {Error} If the API request fails
   */
  setPreferences: (preferences: {
    magicDNS: boolean;
  }): Promise<SetDNSPreferencesReturnType> =>
    createDNSPreferencesSetter(apiKey, tailnet, preferences),
  /**
   * Lists all DNS search paths for the given tailnet.
   *
   * @returns {Promise<ListDNSSearchpathsReturnType>} A promise resolving to an object containing an array of search paths
   * @throws {Error} If the API request fails
   */
  listSearchpaths: (): Promise<ListDNSSearchpathsReturnType> =>
    createSearchpathsLister(apiKey, tailnet),
  /**
   * Sets or updates DNS search paths for the given tailnet.
   *
   * @param newSearchpaths - An array of search path strings to set
   * @returns {Promise<SetSearchpathsReturnType>} A promise resolving to an object containing the newly set search paths
   * @throws {Error} If the API request fails
   */
  setSearchpaths: (
    newSearchpaths: string[]
  ): Promise<SetSearchpathsReturnType> =>
    createSearchpathsSetter(apiKey, tailnet, newSearchpaths)
});

export default createDNSInterface;
