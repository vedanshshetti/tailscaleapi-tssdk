import createUserApprover from "../modules/users/createUserApprover";
import createUserDeleter from "../modules/users/createUserDeleter";
import createUserLister from "../modules/users/createUserLister";
import createUserRestorer from "../modules/users/createUserRestorer";
import createUserRetriever from "../modules/users/createUserRetriever";
import createUserRoleSetter from "../modules/users/createUserRoleSetter";
import createUserSuspender from "../modules/users/createUserSuspender";
/** Creates the user-management route interface for a tailnet. */
const createUsersComponent = (apiKey, tailnet) => ({
    listTailnetUsers: () => createUserLister(apiKey, tailnet),
    getUser: (userID) => createUserRetriever(apiKey, userID),
    setUserRole: (userID, role) => createUserRoleSetter(apiKey, userID, role),
    approveUser: (userID) => createUserApprover(apiKey, userID),
    suspendUser: (userID) => createUserSuspender(apiKey, userID),
    restoreUser: (userID) => createUserRestorer(apiKey, userID),
    deleteUser: (userID) => createUserDeleter(apiKey, userID)
});
export default createUsersComponent;
//# sourceMappingURL=userInterface.js.map