import { APIKey } from "../../types";
/** Provides AWS external ID and trust-policy routes for a tailnet. */
declare const createAWSExternalIDInterface: (apiKey: APIKey, tailnet: string) => {
    getExternalID: () => Promise<Record<string, unknown>>;
    validateAWSTrustPolicy: (id: string, body: Record<string, unknown>) => Promise<Record<string, unknown>>;
};
export default createAWSExternalIDInterface;
