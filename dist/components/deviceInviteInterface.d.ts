import { APIKey } from "../types";
/**
 * Creates an interface for managing device invites.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The device whose invites should be managed
 * @returns {Object} An object with methods for device invite management
 */
declare const createDeviceInvitesInterface: (apiKey: APIKey, deviceID: string) => {
    /**
     * Lists invites for the given device.
     *
     * @returns {Promise<ListDeviceInvitesReturnType>} The list of device invites.
     */
    listDeviceInvites: () => Promise<import("../types").ListDeviceInvitesReturnType>;
    /**
     * Creates a new device invite.
     *
     * @param body - The invite payload.
     * @returns {Promise<DeviceInvite>} The created invite record.
     */
    createDeviceInvite: (body: Record<string, unknown>) => Promise<import("../types").DeviceInvite>;
    /**
     * Gets a single device invite.
     *
     * @param inviteID - The device invite ID.
     * @returns {Promise<DeviceInvite>} The invite record.
     */
    getDeviceInvite: (inviteID: string) => Promise<import("../types").DeviceInvite>;
    /**
     * Deletes a device invite.
     *
     * @param inviteID - The device invite ID.
     * @returns {Promise<void>} Resolves when the invite is removed.
     */
    deleteDeviceInvite: (inviteID: string) => Promise<void>;
    /**
     * Resends a device invite.
     *
     * @param inviteID - The device invite ID.
     * @returns {Promise<void>} Resolves when the invite is re-sent.
     */
    resendDeviceInvite: (inviteID: string) => Promise<void>;
    /**
     * Accepts a device invitation.
     *
     * @param inviteID - The device invite ID.
     * @returns {Promise<void>} Resolves when the invite is accepted.
     */
    acceptDeviceInvite: (inviteID: string) => Promise<void>;
};
export default createDeviceInvitesInterface;
