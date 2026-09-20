import createDNSConfigurationRetriever from "../modules/dns/createDNSConfigurationRetriever";
import createDNSConfigurationSetter from "../modules/dns/createDNSConfigurationSetter";
import createDNSNameserverLister from "../modules/dns/createDNSNameserverLister";
import createDNSNameserverSetter from "../modules/dns/createDNSNameserverSetter";
import createDNSPreferencesRetriever from "../modules/dns/createDNSPreferencesRetriever";
import createDNSPreferencesSetter from "../modules/dns/createDNSPreferencesSetter";
import createSearchpathsLister from "../modules/dns/createSearchpathsLister";
import createSearchpathsSetter from "../modules/dns/createSearchpathsSetter";
import createSplitDNSRetriever from "../modules/dns/createSplitDNSRetriever";
import createSplitDNSSetter from "../modules/dns/createSplitDNSSetter";
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

/** Creates the DNS route interface for a tailnet. */
const createDNSInterface = (apiKey: APIKey, tailnet: string) => ({
  /** Lists configured nameservers. */
  listNameservers: (): Promise<ListNameserversReturnType> =>
    createDNSNameserverLister(apiKey, tailnet),
  /** Sets configured nameservers. */
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
  /** Retrieves DNS preferences. */
  getPreferences: (): Promise<GetDNSPreferencesReturnType> =>
    createDNSPreferencesRetriever(apiKey, tailnet),
  /** Updates DNS preferences. */
  setPreferences: (preferences: {
    magicDNS: boolean;
  }): Promise<SetDNSPreferencesReturnType> =>
    createDNSPreferencesSetter(apiKey, tailnet, preferences),
  /** Lists DNS search paths. */
  listSearchpaths: (): Promise<ListDNSSearchpathsReturnType> =>
    createSearchpathsLister(apiKey, tailnet),
  /** Updates DNS search paths. */
  setSearchpaths: (
    newSearchpaths: string[]
  ): Promise<SetSearchpathsReturnType> =>
    createSearchpathsSetter(apiKey, tailnet, newSearchpaths),
  /** Retrieves split-DNS settings. */
  getSplitDNS: (): Promise<Record<string, unknown>> =>
    createSplitDNSRetriever(apiKey, tailnet),
  /** Updates split-DNS settings. */
  setSplitDNS: (
    body: Record<string, unknown>
  ): Promise<Record<string, unknown>> =>
    createSplitDNSSetter(apiKey, tailnet, body),
  /** Retrieves the DNS configuration. */
  getDNSConfiguration: (): Promise<Record<string, unknown>> =>
    createDNSConfigurationRetriever(apiKey, tailnet),
  /** Updates the DNS configuration. */
  setDNSConfiguration: (
    body: Record<string, unknown>
  ): Promise<Record<string, unknown>> =>
    createDNSConfigurationSetter(apiKey, tailnet, body)
});

export default createDNSInterface;
