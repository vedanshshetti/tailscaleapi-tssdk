import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson } from "../request";
/** Provides AWS external ID and trust-policy routes for a tailnet. */
const createAWSExternalIDInterface = (apiKey, tailnet) => ({
    getExternalID: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/aws-external-id`, "awsExternalID.getExternalID", { method: "POST" }),
    validateAWSTrustPolicy: (id, body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/aws-external-id/${id}/validate-aws-trust-policy`, "awsExternalID.validateAWSTrustPolicy", { method: "POST", body: JSON.stringify(body) }, true)
});
export default createAWSExternalIDInterface;
//# sourceMappingURL=createAWSExternalIDInterface.js.map