import { APIKey, TailscaleKey } from "../../types";
export type SetKeyBody = {
    audience: string;
    description: string;
    issue: string;
    keyType: "client" | "federated";
    scopes: string[];
    subject: string;
    tags: string[];
    customClaimRules: {
        [customClaimRule: string]: string;
    };
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
export default function createKeySetter(apiKey: APIKey, tailnet: string, keyID: string, body: SetKeyBody): Promise<TailscaleKey>;
