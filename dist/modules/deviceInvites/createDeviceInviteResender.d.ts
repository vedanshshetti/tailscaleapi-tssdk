import { APIKey } from "../../types";
/** Resends a device invite. */
export default function createDeviceInviteResender(apiKey: APIKey, inviteID: string): Promise<void>;
