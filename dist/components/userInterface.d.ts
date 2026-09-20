import { APIKey, UserRole } from "../types";
/** Creates the user-management route interface for a tailnet. */
declare const createUsersComponent: (apiKey: APIKey, tailnet: string) => {
    listTailnetUsers: () => Promise<import("../modules/users/createUserLister").ListUsersReturnType>;
    getUser: (userID: string) => Promise<import("../types").TailscaleUser>;
    setUserRole: (userID: string, role: UserRole) => Promise<import("../types").TailscaleUser>;
    approveUser: (userID: string) => Promise<void>;
    suspendUser: (userID: string) => Promise<void>;
    restoreUser: (userID: string) => Promise<void>;
    deleteUser: (userID: string) => Promise<void>;
};
export default createUsersComponent;
