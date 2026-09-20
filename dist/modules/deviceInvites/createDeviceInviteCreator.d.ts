import { APIKey, DeviceInvite } from "../../types";
/** Creates an invite for a device. */
export default function createDeviceInviteCreator(apiKey: APIKey, deviceID: string, body: Record<string, unknown>): Promise<DeviceInvite>;
