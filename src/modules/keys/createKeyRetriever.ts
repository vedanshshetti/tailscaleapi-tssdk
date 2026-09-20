import { TailscaleAPIBaseURL } from "../../constants";
import { APIKey, TailscaleKey } from "../../types";
import { requestJson } from "../request";

export default (apiKey: APIKey, tailnet: string, keyID: string) =>
  requestJson<TailscaleKey>(
    apiKey,
    `${TailscaleAPIBaseURL}/tailnet/${tailnet}/keys/${keyID}`,
    "keys.getKey"
  );
