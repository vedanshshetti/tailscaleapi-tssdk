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
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/split-dns`,
    "dns.setSplitDNS",
    { method: "PATCH", body: JSON.stringify(body) },
    true
  );
