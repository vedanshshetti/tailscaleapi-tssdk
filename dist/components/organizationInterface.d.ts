import { APIKey } from "../types";
/** Creates the organization route interface. */
declare const createOrganizationsComponent: (apiKey: APIKey, organization: string) => {
    listTailnets: () => Promise<import("../types").ListOrganizationTailnetsReturnType>;
    createTailnet: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
    deleteTailnet: () => Promise<void>;
};
export default createOrganizationsComponent;
