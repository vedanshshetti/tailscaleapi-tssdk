import { APIKey, ListOAuthAppsReturnType, ListServicesReturnType, OAuthApp, TailnetSettings, TailscaleService } from "../../types";
/** Provides tailnet settings, service, and OAuth app routes. */
declare const createTailnetSettingsInterface: (apiKey: APIKey, tailnet: string) => {
    getSettings: () => Promise<TailnetSettings>;
    updateSettings: (body: Record<string, unknown>) => Promise<TailnetSettings>;
    listServices: () => Promise<ListServicesReturnType>;
    listServiceDevices: (serviceName: string) => Promise<Record<string, unknown>>;
    getService: (serviceName: string) => Promise<TailscaleService>;
    deleteService: (serviceName: string) => Promise<void>;
    getServiceDeviceApproval: (serviceName: string, deviceID: string) => Promise<boolean>;
    setServiceDeviceApproval: (serviceName: string, deviceID: string, approved: boolean) => Promise<void>;
    listOAuthApps: () => Promise<ListOAuthAppsReturnType>;
    createOAuthApp: (body: Record<string, unknown>) => Promise<OAuthApp>;
    getOAuthApp: (appID: string) => Promise<OAuthApp>;
    deleteOAuthApp: (appID: string) => Promise<void>;
};
export default createTailnetSettingsInterface;
