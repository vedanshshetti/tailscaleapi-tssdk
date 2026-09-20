import { APIKey } from "../../types";
/** Accepts a device invite. */
export default function createDeviceInviteAcceptor(apiKey: APIKey, inviteID: string): Promise<void>;
