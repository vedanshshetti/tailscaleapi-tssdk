import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import {
  authorisedFetch,
  buildErrorMessage,
  hideApiKey,
} from "../../utils";

export type SetDNSPreferencesReturnType = {
  magicDNS: boolean;
};

export default async function createDNSPreferencesSetter(
  apiKey: APIKey,
  tailnet: string,
  preferences: {magicDNS: boolean},
): Promise<SetDNSPreferencesReturnType> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/preferences`,
    apiKey,
    { method: "POST", body: JSON.stringify({ preferences }) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation dns.setPreferences with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}"`,
        req
      )
    );
  return await req.json() as SetDNSPreferencesReturnType;
}
