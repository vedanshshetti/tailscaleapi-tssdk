import { APIKey, ISO8601TimeStamp } from "../../types";
export type ListTailnetKeysReturnType = {
    keys: {
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
    }[];
};
/**
 * Lists all keys (auth keys, API access tokens, and trust credentials) for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list keys
 * @param all - Determines whether all keys should be listed (true) or only keys accessible to the current API key (false)
 * @returns {Promise<ListTailnetKeysReturnType>} A promise resolving to an object containing an array of key objects
 * @throws {Error} If the API request fails
 */
export default function createTailnetKeysLister(apiKey: APIKey, tailnet: string, all: boolean): Promise<ListTailnetKeysReturnType>;
