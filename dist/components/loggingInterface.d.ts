import { APIKey } from "../types";
/** Creates the logging route interface for a tailnet. */
declare const createLoggingComponent: (apiKey: APIKey, tailnet: string) => {
    getConfiguration: () => Promise<Record<string, unknown>>;
    getNetworkLog: () => Promise<Record<string, unknown>>;
    getLogStreamStatus: (logType: string) => Promise<Record<string, unknown>>;
    getLogStream: (logType: string) => Promise<Record<string, unknown>>;
    deleteLogStream: (logType: string) => Promise<void>;
};
export default createLoggingComponent;
