import { APIKey } from "../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../utils";

export async function requestJson<T>(
  apiKey: APIKey,
  url: string,
  operation: string,
  options?: RequestInit,
  hasJsonBody = false
): Promise<T> {
  const response = await authorisedFetch(url, apiKey, options, hasJsonBody);
  if (!response.ok)
    throw new Error(
      buildErrorMessage(
        `Operation ${operation} with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`,
        response
      )
    );
  return (await response.json()) as T;
}

export async function requestVoid(
  apiKey: APIKey,
  url: string,
  operation: string,
  options?: RequestInit
): Promise<void> {
  const response = await authorisedFetch(url, apiKey, options);
  if (!response.ok)
    throw new Error(
      buildErrorMessage(
        `Operation ${operation} with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`,
        response
      )
    );
}
