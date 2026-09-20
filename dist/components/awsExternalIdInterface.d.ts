import { APIKey } from "../types";
/** Creates the AWS external ID route interface for a tailnet. */
declare const createAWSExternalIDComponent: (apiKey: APIKey, tailnet: string) => {
    getExternalID: () => Promise<Record<string, unknown>>;
    validateAWSTrustPolicy: (id: string, body: Record<string, unknown>) => Promise<Record<string, unknown>>;
};
export default createAWSExternalIDComponent;
