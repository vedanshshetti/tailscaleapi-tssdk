import { TailscaleAPIBaseURL } from "../../constants";
import {
  APIKey,
  ListOAuthAppsReturnType,
  ListServicesReturnType,
  OAuthApp,
  TailnetSettings,
  TailscaleService
} from "../../types";
import { requestJson, requestVoid } from "../request";

/** Provides tailnet settings, service, and OAuth app routes. */
const createTailnetSettingsInterface = (apiKey: APIKey, tailnet: string) => ({
  getSettings: (): Promise<TailnetSettings> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/settings`,
      "tailnetSettings.getSettings"
    ),
  updateSettings: (body: Record<string, unknown>): Promise<TailnetSettings> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/settings`,
      "tailnetSettings.updateSettings",
      { method: "PATCH", body: JSON.stringify(body) },
      true
    ),
  listServices: (): Promise<ListServicesReturnType> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services`,
      "tailnetSettings.listServices"
    ),
  listServiceDevices: (serviceName: string): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}/devices`,
      "tailnetSettings.listServiceDevices"
    ),
  getService: (serviceName: string): Promise<TailscaleService> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}`,
      "tailnetSettings.getService"
    ),
  deleteService: (serviceName: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}`,
      "tailnetSettings.deleteService",
      { method: "DELETE" }
    ),
  getServiceDeviceApproval: (
    serviceName: string,
    deviceID: string
  ): Promise<boolean> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}/device/${deviceID}/approved`,
      "tailnetSettings.getServiceDeviceApproval"
    ),
  setServiceDeviceApproval: (
    serviceName: string,
    deviceID: string,
    approved: boolean
  ): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}/device/${deviceID}/approved`,
      "tailnetSettings.setServiceDeviceApproval",
      { method: "POST", body: JSON.stringify({ approved }) }
    ),
  listOAuthApps: (): Promise<ListOAuthAppsReturnType> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps`,
      "tailnetSettings.listOAuthApps"
    ),
  createOAuthApp: (body: Record<string, unknown>): Promise<OAuthApp> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps`,
      "tailnetSettings.createOAuthApp",
      { method: "POST", body: JSON.stringify(body) },
      true
    ),
  getOAuthApp: (appID: string): Promise<OAuthApp> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps/${appID}`,
      "tailnetSettings.getOAuthApp"
    ),
  deleteOAuthApp: (appID: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps/${appID}`,
      "tailnetSettings.deleteOAuthApp",
      { method: "DELETE" }
    )
});

export default createTailnetSettingsInterface;
