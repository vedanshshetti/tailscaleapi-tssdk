import { APIKey } from "../types";
/** Creates the tailnet settings route interface. */
declare const createTailnetSettingsComponent: (apiKey: APIKey, tailnet: string) => {
    getSettings: () => Promise<import("../types").TailnetSettings>;
    updateSettings: (body: Record<string, unknown>) => Promise<import("../types").TailnetSettings>;
    listServices: () => Promise<import("../types").ListServicesReturnType>;
    listServiceDevices: (serviceName: string) => Promise<Record<string, unknown>>;
    getService: (serviceName: string) => Promise<import("../types").TailscaleService>;
    deleteService: (serviceName: string) => Promise<void>;
    getServiceDeviceApproval: (serviceName: string, deviceID: string) => Promise<boolean>;
    setServiceDeviceApproval: (serviceName: string, deviceID: string, approved: boolean) => Promise<void>;
    listOAuthApps: () => Promise<import("../types").ListOAuthAppsReturnType>;
    createOAuthApp: (body: Record<string, unknown>) => Promise<import("../types").OAuthApp>;
    getOAuthApp: (appID: string) => Promise<import("../types").OAuthApp>;
    deleteOAuthApp: (appID: string) => Promise<void>;
};
export default createTailnetSettingsComponent;
