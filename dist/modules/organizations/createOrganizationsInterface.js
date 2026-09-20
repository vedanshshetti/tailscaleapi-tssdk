import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson, requestVoid } from "../request";
/** Provides organization and tailnet routes. */
const createOrganizationsInterface = (apiKey, organization) => ({
    listTailnets: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/organizations/${organization}/tailnets`, "organizations.listTailnets"),
    createTailnet: (body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/organizations/${organization}/tailnets`, "organizations.createTailnet", { method: "POST", body: JSON.stringify(body) }, true),
    deleteTailnet: () => requestVoid(apiKey, `${TailscaleAPIBaseURL}/tailnet/${organization}`, "organizations.deleteTailnet", { method: "DELETE" })
});
export default createOrganizationsInterface;
//# sourceMappingURL=createOrganizationsInterface.js.map