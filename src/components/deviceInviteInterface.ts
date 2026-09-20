import createDeviceInviteAcceptor from "../modules/deviceInvites/createDeviceInviteAcceptor";
import createDeviceInviteCreator from "../modules/deviceInvites/createDeviceInviteCreator";
import createDeviceInviteDeleter from "../modules/deviceInvites/createDeviceInviteDeleter";
import createDeviceInviteLister from "../modules/deviceInvites/createDeviceInviteLister";
import createDeviceInviteResender from "../modules/deviceInvites/createDeviceInviteResender";
import createDeviceInviteRetriever from "../modules/deviceInvites/createDeviceInviteRetriever";
import { APIKey } from "../types";

/**
 * Creates an interface for managing device invites.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The device whose invites should be managed
 * @returns {Object} An object with methods for device invite management
 */
const createDeviceInvitesInterface = (apiKey: APIKey, deviceID: string) => ({
  /**
   * Lists invites for the given device.
   *
   * @returns {Promise<ListDeviceInvitesReturnType>} The list of device invites.
   */
  listDeviceInvites: () => createDeviceInviteLister(apiKey, deviceID),

  /**
   * Creates a new device invite.
   *
   * @param body - The invite payload.
   * @returns {Promise<DeviceInvite>} The created invite record.
   */
  createDeviceInvite: (body: Record<string, unknown>) =>
    createDeviceInviteCreator(apiKey, deviceID, body),

  /**
   * Gets a single device invite.
   *
   * @param inviteID - The device invite ID.
   * @returns {Promise<DeviceInvite>} The invite record.
   */
  getDeviceInvite: (inviteID: string) =>
    createDeviceInviteRetriever(apiKey, inviteID),

  /**
   * Deletes a device invite.
   *
   * @param inviteID - The device invite ID.
   * @returns {Promise<void>} Resolves when the invite is removed.
   */
  deleteDeviceInvite: (inviteID: string) =>
    createDeviceInviteDeleter(apiKey, inviteID),

  /**
   * Resends a device invite.
   *
   * @param inviteID - The device invite ID.
   * @returns {Promise<void>} Resolves when the invite is re-sent.
   */
  resendDeviceInvite: (inviteID: string) =>
    createDeviceInviteResender(apiKey, inviteID),

  /**
   * Accepts a device invitation.
   *
   * @param inviteID - The device invite ID.
   * @returns {Promise<void>} Resolves when the invite is accepted.
   */
  acceptDeviceInvite: (inviteID: string) =>
    createDeviceInviteAcceptor(apiKey, inviteID)
});

export default createDeviceInvitesInterface;
