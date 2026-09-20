import { APIKey } from "../../types";
/** Provides logging configuration and stream routes for a tailnet. */
declare const createLoggingInterface: (apiKey: APIKey, tailnet: string) => {
    getConfiguration: () => Promise<Record<string, unknown>>;
    getNetworkLog: () => Promise<Record<string, unknown>>;
    getLogStreamStatus: (logType: string) => Promise<Record<string, unknown>>;
    getLogStream: (logType: string) => Promise<Record<string, unknown>>;
    deleteLogStream: (logType: string) => Promise<void>;
};
export default createLoggingInterface;
