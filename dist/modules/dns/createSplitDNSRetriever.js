import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson } from "../request";
export default (apiKey, tailnet) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/split-dns`, "dns.getSplitDNS");
//# sourceMappingURL=createSplitDNSRetriever.js.map