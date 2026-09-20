import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, TailscaleKey } from "../../types";
import { authorisedFetch, buildErrorMessage, hideApiKey } from "../../utils";

export type SetKeyBody = {
  audience: string;
  description: string;
  issue: string;
  keyType: "client" | "federated";
  scopes: string[];
  subject: string;
  tags: string[];
  customClaimRules: { [customClaimRule: string]: string };
};

/**
 * Updates the configuration of an existing key by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which the key exists
 * @param keyID - The unique identifier of the key to update
 * @param body - The new key configuration object
 * @returns {Promise<TailscaleKey>} A promise resolving to the updated key object
 * @throws {Error} If the API request fails
 */
export default async function createKeySetter(
  apiKey: APIKey,
  tailnet: string,
  keyID: string,
  body: SetKeyBody
): Promise<TailscaleKey> {
  const req = await authorisedFetch(
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys/${keyID}`,
    apiKey,
    { method: "POST", body: JSON.stringify(body) },
    true
  );
  if (!req.ok)
    throw new Error(
      buildErrorMessage(
        `Operation keys.setKey with API Key ${hideApiKey(apiKey)} failed;
     Tailscale API returned a status code of ${req.status} with
     status text of "${req.statusText}".`,
        req
      )
    );
  return (await req.json()) as TailscaleKey;
}
