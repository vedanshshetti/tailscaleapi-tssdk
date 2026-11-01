import { APIKey } from "../types";
/** Creates the tailnet settings route interface. */
declare const createTailnetSettingsComponent: (apiKey: APIKey, tailnet: string) => {
    getSettings: () => Promise<import("..").TailnetSettings>;
    updateSettings: (body: Record<string, unknown>) => Promise<import("..").TailnetSettings>;
    listServices: () => Promise<import("..").ListServicesReturnType>;
    listServiceDevices: (serviceName: string) => Promise<Record<string, unknown>>;
    getService: (serviceName: string) => Promise<import("..").TailscaleService>;
    setService: (serviceName: string, body: import("..").TailscaleService) => Promise<void>;
    deleteService: (serviceName: string) => Promise<void>;
    getServiceDeviceApproval: (serviceName: string, deviceID: string) => Promise<boolean>;
    setServiceDeviceApproval: (serviceName: string, deviceID: string, approved: boolean) => Promise<void>;
    listOAuthApps: () => Promise<import("..").ListOAuthAppsReturnType>;
    createOAuthApp: (body: Record<string, unknown>) => Promise<import("..").OAuthApp>;
    getOAuthApp: (appID: string) => Promise<import("..").OAuthApp>;
    deleteOAuthApp: (appID: string) => Promise<void>;
};
export default createTailnetSettingsComponent;
