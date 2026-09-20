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
export function authorisedFetch(
  url: string,
  authToken: string,
  otherOptions?: RequestInit,
  requiresJSONContentHeader = false
) {
  const { headers: additionalHeaders, ...requestOptions } = otherOptions ?? {};

  return fetch(url, {
    ...requestOptions,
    headers: {
      ...additionalHeaders,
      ...(requiresJSONContentHeader
        ? { "Content-Type": "application/json", "Accept": "application/json" }
        : {}),
      Authorization: `Bearer ${authToken}`
    }
  });
}

/**
 * Builds an error message with additional context for API errors.
 * Adds a helpful suggestion for 401 (unauthorized) errors.
 *
 * @param message - The base error message
 * @param res - The response object from the failed fetch
 * @returns {string} A formatted error message with context
 */
export function buildErrorMessage(message: string, res: Response) {
  return `[@typescript-utils/tailscale-api-wrapper] had an Error: ${message} ${res.status === 401 ? "Here's a suggestion: Check your API Key, maybe you have a typo." : ""}`;
}

/**
 * Hides the API key for secure logging, showing only partial characters.
 *
 * @param key - The Tailscale API key to hide
 * @returns {string} A partially hidden version of the API key for safe logging
 */
export function hideApiKey(key: APIKey) {
  const keyWithoutPrefix = key.replace(/^tskey-api-/, "");
  if (keyWithoutPrefix.length < 2) return "####";
  return `${keyWithoutPrefix[0]}####${keyWithoutPrefix[keyWithoutPrefix.length - 1]}`;
}

/**
 * A utility function that negates a boolean value.
 *
 * @param val - The value to negate
 * @returns {boolean} The negated value
 */
export const not: <T>(val: T) => boolean = <T>(val: T) => !val;
