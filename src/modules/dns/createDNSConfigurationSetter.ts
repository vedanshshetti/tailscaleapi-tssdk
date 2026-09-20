import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { requestJson } from "../request";

export default (
  apiKey: APIKey,
  tailnet: string,
  body: Record<string, unknown>
) =>
  requestJson<Record<string, unknown>>(
    apiKey,
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/configuration`,
    "dns.setDNSConfiguration",
    { method: "POST", body: JSON.stringify(body) },
    true
  );
