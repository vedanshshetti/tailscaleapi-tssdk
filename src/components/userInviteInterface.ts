import createUserInviteCreator from "../modules/userInvites/createUserInviteCreator";
import createUserInviteDeleter from "../modules/userInvites/createUserInviteDeleter";
import createUserInviteLister from "../modules/userInvites/createUserInviteLister";
import createUserInviteResender from "../modules/userInvites/createUserInviteResender";
import createUserInviteRetriever from "../modules/userInvites/createUserInviteRetriever";
import { APIKey } from "../types";

/** Creates the user-invite route interface for a tailnet. */
const createUserInvitesComponent = (apiKey: APIKey, tailnet: string) => ({
  listUserInvites: () => createUserInviteLister(apiKey, tailnet),
  createUserInvite: (body: Record<string, unknown>) =>
    createUserInviteCreator(apiKey, tailnet, body),
  getUserInvite: (inviteID: string) =>
    createUserInviteRetriever(apiKey, inviteID),
  deleteUserInvite: (inviteID: string) =>
    createUserInviteDeleter(apiKey, inviteID),
  resendUserInvite: (inviteID: string) =>
    createUserInviteResender(apiKey, inviteID)
});

export default createUserInvitesComponent;
