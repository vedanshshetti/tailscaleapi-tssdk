import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { requestJson, requestVoid } from "../request";

/** Provides logging configuration and stream routes for a tailnet. */
const createLoggingInterface = (apiKey: APIKey, tailnet: string) => ({
  getConfiguration: (): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/configuration`,
      "logging.getConfiguration"
    ),
  getNetworkLog: (): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/network`,
      "logging.getNetworkLog"
    ),
  getLogStreamStatus: (logType: string): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/${logType}/stream/status`,
      "logging.getLogStreamStatus"
    ),
  getLogStream: (logType: string): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/${logType}/stream`,
      "logging.getLogStream"
    ),
  deleteLogStream: (logType: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/logging/${logType}/stream`,
      "logging.deleteLogStream",
      { method: "DELETE" }
    )
});

export default createLoggingInterface;
