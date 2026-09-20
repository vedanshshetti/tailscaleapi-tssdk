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
/** Creates the DNS route interface for a tailnet. */
const createDNSInterface = (apiKey, tailnet) => ({
    /** Lists configured nameservers. */
    listNameservers: () => createDNSNameserverLister(apiKey, tailnet),
    /** Sets configured nameservers. */
    setNameservers: (newNameservers, overrideSafetyGuardrails = false) => createDNSNameserverSetter(apiKey, tailnet, newNameservers, overrideSafetyGuardrails),
    /** Retrieves DNS preferences. */
    getPreferences: () => createDNSPreferencesRetriever(apiKey, tailnet),
    /** Updates DNS preferences. */
    setPreferences: (preferences) => createDNSPreferencesSetter(apiKey, tailnet, preferences),
    /** Lists DNS search paths. */
    listSearchpaths: () => createSearchpathsLister(apiKey, tailnet),
    /** Updates DNS search paths. */
    setSearchpaths: (newSearchpaths) => createSearchpathsSetter(apiKey, tailnet, newSearchpaths),
    /** Retrieves split-DNS settings. */
    getSplitDNS: () => createSplitDNSRetriever(apiKey, tailnet),
    /** Updates split-DNS settings. */
    setSplitDNS: (body) => createSplitDNSSetter(apiKey, tailnet, body),
    /** Retrieves the DNS configuration. */
    getDNSConfiguration: () => createDNSConfigurationRetriever(apiKey, tailnet),
    /** Updates the DNS configuration. */
    setDNSConfiguration: (body) => createDNSConfigurationSetter(apiKey, tailnet, body)
});
export default createDNSInterface;
//# sourceMappingURL=dnsInterface.js.map