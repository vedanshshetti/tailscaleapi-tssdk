import createUserApprover from "../modules/users/createUserApprover";
import createUserDeleter from "../modules/users/createUserDeleter";
import createUserLister from "../modules/users/createUserLister";
import createUserRestorer from "../modules/users/createUserRestorer";
import createUserRetriever from "../modules/users/createUserRetriever";
import createUserRoleSetter from "../modules/users/createUserRoleSetter";
import createUserSuspender from "../modules/users/createUserSuspender";
import { APIKey, UserRole } from "../types";

/** Creates the user-management route interface for a tailnet. */
const createUsersComponent = (apiKey: APIKey, tailnet: string) => ({
  listTailnetUsers: () => createUserLister(apiKey, tailnet),
  getUser: (userID: string) => createUserRetriever(apiKey, userID),
  setUserRole: (userID: string, role: UserRole) =>
    createUserRoleSetter(apiKey, userID, role),
  approveUser: (userID: string) => createUserApprover(apiKey, userID),
  suspendUser: (userID: string) => createUserSuspender(apiKey, userID),
  restoreUser: (userID: string) => createUserRestorer(apiKey, userID),
  deleteUser: (userID: string) => createUserDeleter(apiKey, userID)
});

export default createUsersComponent;
