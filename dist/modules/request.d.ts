import { APIKey } from "../types";
export declare function requestJson<T>(apiKey: APIKey, url: string, operation: string, options?: RequestInit, hasJsonBody?: boolean): Promise<T>;
export declare function requestVoid(apiKey: APIKey, url: string, operation: string, options?: RequestInit): Promise<void>;
