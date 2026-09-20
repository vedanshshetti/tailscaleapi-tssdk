import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson, requestVoid } from "../request";
/** Provides logging configuration and stream routes for a tailnet. */
const createLoggingInterface = (apiKey, tailnet) => ({
    getConfiguration: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/configuration`, "logging.getConfiguration"),
    getNetworkLog: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/network`, "logging.getNetworkLog"),
    getLogStreamStatus: (logType) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/${logType}/stream/status`, "logging.getLogStreamStatus"),
    getLogStream: (logType) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/${logType}/stream`, "logging.getLogStream"),
    deleteLogStream: (logType) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/${logType}/stream`, "logging.deleteLogStream", { method: "DELETE" })
});
export default createLoggingInterface;
//# sourceMappingURL=createLoggingInterface.js.map