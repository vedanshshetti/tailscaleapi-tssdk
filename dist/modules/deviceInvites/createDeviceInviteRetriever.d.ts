import { APIKey, DeviceInvite } from "../../types";
/** Retrieves a device invite. */
export default function createDeviceInviteRetriever(apiKey: APIKey, inviteID: string): Promise<DeviceInvite>;
