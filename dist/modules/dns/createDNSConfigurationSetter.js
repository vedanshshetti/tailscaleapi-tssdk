import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson } from "../request";
export default (apiKey, tailnet, body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/configuration`, "dns.setDNSConfiguration", { method: "POST", body: JSON.stringify(body) }, true);
//# sourceMappingURL=createDNSConfigurationSetter.js.map