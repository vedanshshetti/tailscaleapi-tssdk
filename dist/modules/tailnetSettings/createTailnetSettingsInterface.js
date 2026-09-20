import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson, requestVoid } from "../request";
/** Provides tailnet settings, service, and OAuth app routes. */
const createTailnetSettingsInterface = (apiKey, tailnet) => ({
    getSettings: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/settings`, "tailnetSettings.getSettings"),
    updateSettings: (body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/settings`, "tailnetSettings.updateSettings", { method: "PATCH", body: JSON.stringify(body) }, true),
    listServices: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services`, "tailnetSettings.listServices"),
    listServiceDevices: (serviceName) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}/devices`, "tailnetSettings.listServiceDevices"),
    getService: (serviceName) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}`, "tailnetSettings.getService"),
    deleteService: (serviceName) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}`, "tailnetSettings.deleteService", { method: "DELETE" }),
    getServiceDeviceApproval: (serviceName, deviceID) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}/device/${deviceID}/approved`, "tailnetSettings.getServiceDeviceApproval"),
    setServiceDeviceApproval: (serviceName, deviceID, approved) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}/device/${deviceID}/approved`, "tailnetSettings.setServiceDeviceApproval", { method: "POST", body: JSON.stringify({ approved }) }),
    listOAuthApps: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps`, "tailnetSettings.listOAuthApps"),
    createOAuthApp: (body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps`, "tailnetSettings.createOAuthApp", { method: "POST", body: JSON.stringify(body) }, true),
    getOAuthApp: (appID) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps/${appID}`, "tailnetSettings.getOAuthApp"),
    deleteOAuthApp: (appID) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/oauth-apps/${appID}`, "tailnetSettings.deleteOAuthApp", { method: "DELETE" })
});
export default createTailnetSettingsInterface;
//# sourceMappingURL=createTailnetSettingsInterface.js.map