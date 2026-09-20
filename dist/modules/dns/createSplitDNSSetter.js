import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson } from "../request";
export default (apiKey, tailnet, body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/split-dns`, "dns.setSplitDNS", { method: "PATCH", body: JSON.stringify(body) }, true);
//# sourceMappingURL=createSplitDNSSetter.js.map