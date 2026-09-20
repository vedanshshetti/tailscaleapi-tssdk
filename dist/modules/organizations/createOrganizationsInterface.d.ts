import { APIKey, ListOrganizationTailnetsReturnType } from "../../types";
/** Provides organization and tailnet routes. */
declare const createOrganizationsInterface: (apiKey: APIKey, organization: string) => {
    listTailnets: () => Promise<ListOrganizationTailnetsReturnType>;
    createTailnet: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
    deleteTailnet: () => Promise<void>;
};
export default createOrganizationsInterface;
