import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, ListOrganizationTailnetsReturnType } from "../../types";
import { requestJson, requestVoid } from "../request";

/** Provides organization and tailnet routes. */
const createOrganizationsInterface = (
  apiKey: APIKey,
  organization: string
) => ({
  listTailnets: (): Promise<ListOrganizationTailnetsReturnType> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/organizations/${organization}/tailnets`,
      "organizations.listTailnets"
    ),
  createTailnet: (
    body: Record<string, unknown>
  ): Promise<Record<string, unknown>> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/organizations/${organization}/tailnets`,
      "organizations.createTailnet",
      { method: "POST", body: JSON.stringify(body) },
      true
    ),
  deleteTailnet: (): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${organization}`,
      "organizations.deleteTailnet",
      { method: "DELETE" }
    )
});

export default createOrganizationsInterface;
