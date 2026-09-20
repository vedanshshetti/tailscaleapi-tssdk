import { APIKey } from "../types";
/** Creates the user-invite route interface for a tailnet. */
declare const createUserInvitesComponent: (apiKey: APIKey, tailnet: string) => {
    listUserInvites: () => Promise<import("../modules/userInvites/createUserInviteLister").ListUserInvitesReturnType>;
    createUserInvite: (body: Record<string, unknown>) => Promise<import("../types").TailscaleUserInvite>;
    getUserInvite: (inviteID: string) => Promise<import("../types").TailscaleUserInvite>;
    deleteUserInvite: (inviteID: string) => Promise<void>;
    resendUserInvite: (inviteID: string) => Promise<import("../types").TailscaleUserInvite>;
};
export default createUserInvitesComponent;
