import { APIKey, DNSNameserver, GetDNSPreferencesReturnType, ListDNSSearchpathsReturnType, ListNameserversReturnType, SetDNSPreferencesReturnType, SetNameserversReturnType, SetSearchpathsReturnType } from "../types";
/** Creates the DNS route interface for a tailnet. */
declare const createDNSInterface: (apiKey: APIKey, tailnet: string) => {
    /** Lists configured nameservers. */
    listNameservers: () => Promise<ListNameserversReturnType>;
    /** Sets configured nameservers. */
    setNameservers: (newNameservers: DNSNameserver[], overrideSafetyGuardrails?: boolean) => Promise<SetNameserversReturnType>;
    /** Retrieves DNS preferences. */
    getPreferences: () => Promise<GetDNSPreferencesReturnType>;
    /** Updates DNS preferences. */
    setPreferences: (preferences: {
        magicDNS: boolean;
    }) => Promise<SetDNSPreferencesReturnType>;
    /** Lists DNS search paths. */
    listSearchpaths: () => Promise<ListDNSSearchpathsReturnType>;
    /** Updates DNS search paths. */
    setSearchpaths: (newSearchpaths: string[]) => Promise<SetSearchpathsReturnType>;
    /** Retrieves split-DNS settings. */
    getSplitDNS: () => Promise<Record<string, unknown>>;
    /** Updates split-DNS settings. */
    setSplitDNS: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
    /** Retrieves the DNS configuration. */
    getDNSConfiguration: () => Promise<Record<string, unknown>>;
    /** Updates the DNS configuration. */
    setDNSConfiguration: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
};
export default createDNSInterface;
