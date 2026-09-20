import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey } from "../../types";
import { requestJson } from "../request";

export default (apiKey: APIKey, tailnet: string) =>
  requestJson<Record<string, unknown>>(
    apiKey,
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/dns/configuration`,
    "dns.getDNSConfiguration"
  );
