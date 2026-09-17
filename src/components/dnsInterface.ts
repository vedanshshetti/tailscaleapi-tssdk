import createDNSNameserverLister from "../modules/dns/createDNSNameserverLister";
import createDNSNameserverSetter from "../modules/dns/createDNSNameserverSetter";
import createDNSPreferencesRetriever from "../modules/dns/createDNSPreferencesRetriever";
import createDNSPreferencesSetter from "../modules/dns/createDNSPreferencesSetter";
import createSearchpathsLister from "../modules/dns/createSearchpathsLister";
import {
  APIKey,
  DNSNameserver,
  GetDNSPreferencesReturnType,
  ListDNSSearchpathsReturnType,
  ListNameserversReturnType,
  SetDNSPreferencesReturnType,
  SetNameserversReturnType
} from "../types";

const createDNSInterface = (apiKey: APIKey, tailnet: string) => ({
  /**
   * Lists all active DNS Nameservers for given Tailnet
   * @returns {Promise<ListNameserversReturnType>}
   */
  listNameservers: (): Promise<ListNameserversReturnType> =>
    createDNSNameserverLister(apiKey, tailnet),
  /**
   * Sets the Tailnet DNS Nameservers to given list.
   * @param newNameservers New DNS Nameservers to be applied.
   * @param overrideSafetyGuardrails Overrides safety guardrails and allows application of certain invalid nameservers.
   * Do not apply this in production systems.
   * @returns {Promise<SetNameserversReturnType>}
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
   * Retrieves the DNS Preferences.
   * @returns {Promise<GetDNSPreferencesReturnType>} An object with the DNS Preferences, like magicDNS.
   */
  getPreferences: (): Promise<GetDNSPreferencesReturnType> =>
    createDNSPreferencesRetriever(apiKey, tailnet),
  /**
   * Applies given DNS preferences.
   * @param preferences Preferences to be applied
   * @returns {Promise<SetDNSPreferencesReturnType>}
   */
  setPreferences: (preferences: {
    magicDNS: boolean;
  }): Promise<SetDNSPreferencesReturnType> =>
    createDNSPreferencesSetter(apiKey, tailnet, preferences),
  /**
   * Lists all applied DNS Searchpaths
   * @returns {Promise<ListDNSSearchpathsReturnType>} Search paths
   */
  listSearchpaths: (): Promise<ListDNSSearchpathsReturnType> =>
    createSearchpathsLister(apiKey, tailnet)
});

export default createDNSInterface;
