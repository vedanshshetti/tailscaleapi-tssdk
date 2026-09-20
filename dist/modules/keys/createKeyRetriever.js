import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson } from "../request";
export default (apiKey, tailnet, keyID) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys/${keyID}`, "keys.getKey");
//# sourceMappingURL=createKeyRetriever.js.map