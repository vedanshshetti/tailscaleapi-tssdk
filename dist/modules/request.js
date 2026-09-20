import { authorisedFetch, buildErrorMessage, hideApiKey } from "../utils";
export async function requestJson(apiKey, url, operation, options, hasJsonBody = false) {
    const response = await authorisedFetch(url, apiKey, options, hasJsonBody);
    if (!response.ok)
        throw new Error(buildErrorMessage(`Operation ${operation} with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`, response));
    return (await response.json());
}
export async function requestVoid(apiKey, url, operation, options) {
    const response = await authorisedFetch(url, apiKey, options);
    if (!response.ok)
        throw new Error(buildErrorMessage(`Operation ${operation} with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${response.status} with status text of "${response.statusText}".`, response));
}
//# sourceMappingURL=request.js.map