import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type GetDNSPreferencesReturnType = {
  magicDNS: boolean;
};

export default async function createDNSPreferencesRetriever(
  apiKey: APIKey,
  tailnet: string
): Promise<GetDNSPreferencesReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/preferences`,
    apiKey
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation dns.getPreferences with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`,
        req
      )
    );
  return (await req.json()) as GetDNSPreferencesReturnType;
}
