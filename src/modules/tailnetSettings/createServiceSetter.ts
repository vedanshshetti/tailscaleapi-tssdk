import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, TailscaleService } from "../../types";
import { requestVoid } from "../request";

/**
 * Creates or updates a virtual service in a tailnet.
 *
 * The service name is part of the URL and must match the name in the body.
 */
export default function createServiceSetter(
  apiKey: APIKey,
  tailnet: string,
  serviceName: string,
  body: TailscaleService
): Promise<void> {
  return requestVoid(
    apiKey,
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/services/${serviceName}`,
    "tailnetSettings.setService",
    { method: "PUT", body: JSON.stringify(body) }
  );
}
