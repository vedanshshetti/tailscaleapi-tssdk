import createUserInviteCreator from "../modules/userInvites/createUserInviteCreator";
import createUserInviteDeleter from "../modules/userInvites/createUserInviteDeleter";
import createUserInviteLister from "../modules/userInvites/createUserInviteLister";
import createUserInviteResender from "../modules/userInvites/createUserInviteResender";
import createUserInviteRetriever from "../modules/userInvites/createUserInviteRetriever";
/** Creates the user-invite route interface for a tailnet. */
const createUserInvitesComponent = (apiKey, tailnet) => ({
    listUserInvites: () => createUserInviteLister(apiKey, tailnet),
    createUserInvite: (body) => createUserInviteCreator(apiKey, tailnet, body),
    getUserInvite: (inviteID) => createUserInviteRetriever(apiKey, inviteID),
    deleteUserInvite: (inviteID) => createUserInviteDeleter(apiKey, inviteID),
    resendUserInvite: (inviteID) => createUserInviteResender(apiKey, inviteID)
});
export default createUserInvitesComponent;
//# sourceMappingURL=userInviteInterface.js.map