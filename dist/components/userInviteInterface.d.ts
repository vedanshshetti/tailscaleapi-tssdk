import { APIKey } from "../types";
/** Creates the user-invite route interface for a tailnet. */
declare const createUserInvitesComponent: (apiKey: APIKey, tailnet: string) => {
    listUserInvites: () => Promise<import("../modules/userInvites/createUserInviteLister").ListUserInvitesReturnType>;
    createUserInvite: (body: Record<string, unknown>) => Promise<import("..").TailscaleUserInvite>;
    getUserInvite: (inviteID: string) => Promise<import("..").TailscaleUserInvite>;
    deleteUserInvite: (inviteID: string) => Promise<void>;
    resendUserInvite: (inviteID: string) => Promise<import("..").TailscaleUserInvite>;
};
export default createUserInvitesComponent;
