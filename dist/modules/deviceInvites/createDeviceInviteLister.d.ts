import { APIKey, ListDeviceInvitesReturnType } from "../../types";
/** Lists invites for a device. */
export default function createDeviceInviteLister(apiKey: APIKey, deviceID: string): Promise<ListDeviceInvitesReturnType>;
