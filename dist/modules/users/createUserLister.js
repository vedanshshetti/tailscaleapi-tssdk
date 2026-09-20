import { TailscaleAPIBaseURL } from "../../constants";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";
/**
 * Lists users in a tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name
 * @returns {Promise<ListUsersReturnType>} A promise resolving to the list of users.
 */
export default async function createUserLister(apiKey, tailnet) {
    const req = await authorisedFetch(`${TailscaleAPIBaseURL}/tailnet/${tailnet}/users`, apiKey);
    if (!req.ok)
        throw new Error(buildErrorMessage(`Operation users.listTailnetUsers with API Key ${hideApiKey(apiKey)} failed; Tailscale API returned a status code of ${req.status} with status text of "${req.statusText}".`, req));
    return (await req.json());
}
//# sourceMappingURL=createUserLister.js.map