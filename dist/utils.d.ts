import { APIKey } from "./types";
/**
 * Makes an authorized fetch request to the Tailscale API with the provided API key.
 *
 * @param url - The full URL to fetch
 * @param authToken - The Tailscale API key for authorization
 * @param otherOptions - Optional additional fetch options (method, body, etc.)
 * @param requiresJSONContentHeader - Whether to include JSON content-type headers (default: false)
 * @returns {Promise<Response>} The fetch response
 */
export declare function authorisedFetch(url: string, authToken: string, otherOptions?: RequestInit, requiresJSONContentHeader?: boolean): Promise<Response>;
/**
 * Builds an error message with additional context for API errors.
 * Adds a helpful suggestion for 401 (unauthorized) errors.
 *
 * @param message - The base error message
 * @param res - The response object from the failed fetch
 * @returns {string} A formatted error message with context
 */
export declare function buildErrorMessage(message: string, res: Response): string;
/**
 * Hides the API key for secure logging, showing only partial characters.
 *
 * @param key - The Tailscale API key to hide
 * @returns {string} A partially hidden version of the API key for safe logging
 */
export declare function hideApiKey(key: APIKey): string;
/**
 * A utility function that negates a boolean value.
 *
 * @param val - The value to negate
 * @returns {boolean} The negated value
 */
export declare const not: <T>(val: T) => boolean;
