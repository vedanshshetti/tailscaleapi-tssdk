import { APIKey, ISO8601TimeStamp } from "../../types";
export type TailscaleKey = {
    id: string;
    key?: string;
    keyType: "auth" | "client" | "api" | "federated";
    expirySeconds?: number;
    created: ISO8601TimeStamp;
    updated?: string;
    expires?: string;
    revoked?: string;
    capabilities?: {
        devices?: {
            create?: {
                reusable?: boolean;
                ephemeral?: boolean;
                preauthorized?: boolean;
                tags?: string[];
            };
        };
    };
    scopes?: string[];
    tags?: string[];
    description?: string;
    invalid?: boolean;
    userId?: string;
    audience?: string;
    issuer?: string;
    subject?: string;
    customClaimRules?: {
        [claimName: string]: string;
    };
};
/**
 * Creates a new key (auth key, API access token, or trust credential) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to create the key
 * @param body - The key configuration object
 * @returns {Promise<TailscaleKey>} A promise resolving to the created key object
 * @throws {Error} If the API request fails
 */
export default function createKeyCreation(apiKey: APIKey, tailnet: string, body: TailscaleKey): Promise<TailscaleKey>;
