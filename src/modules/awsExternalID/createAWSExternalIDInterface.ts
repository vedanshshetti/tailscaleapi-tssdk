import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { requestJson } from "../request";

/** Provides AWS external ID and trust-policy routes for a tailnet. */
const createAWSExternalIDInterface = (apiKey: APIKey, tailnet: string) => ({
  getExternalID: (): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/aws-external-id`,
      "awsExternalID.getExternalID",
      { method: "POST" }
    ),
  validateAWSTrustPolicy: (
    id: string,
    body: Record<string, unknown>
  ): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/aws-external-id/${id}/validate-aws-trust-policy`,
      "awsExternalID.validateAWSTrustPolicy",
      { method: "POST", body: JSON.stringify(body) },
      true
    )
});

export default createAWSExternalIDInterface;
