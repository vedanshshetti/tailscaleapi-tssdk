import { APIKey } from "../types";
/** Creates the posture route interface for a tailnet. */
declare const createPostureComponent: (apiKey: APIKey, tailnet: string) => {
    listPostureIntegrations: () => Promise<import("../types").ListPostureIntegrationsReturnType>;
    createPostureIntegration: (body: Record<string, unknown>) => Promise<import("../types").PostureIntegration>;
    getPostureIntegration: (integrationID: string) => Promise<import("../types").PostureIntegration>;
    updatePostureIntegration: (integrationID: string, body: Record<string, unknown>) => Promise<import("../types").PostureIntegration>;
    deletePostureIntegration: (integrationID: string) => Promise<void>;
    listContacts: (contactType: string) => Promise<import("../types").ListContactsReturnType>;
    updateContacts: (contactType: string, body: Record<string, unknown>) => Promise<import("../types").TailscaleContact>;
    resendContactVerificationEmail: (contactType: string) => Promise<void>;
    listWebhooks: () => Promise<import("../types").ListWebhooksReturnType>;
    createWebhook: (body: Record<string, unknown>) => Promise<import("../types").TailscaleWebhook>;
    getWebhook: (endpointID: string) => Promise<import("../types").TailscaleWebhook>;
    updateWebhook: (endpointID: string, body: Record<string, unknown>) => Promise<import("../types").TailscaleWebhook>;
    deleteWebhook: (endpointID: string) => Promise<void>;
    testWebhook: (endpointID: string) => Promise<void>;
    rotateWebhook: (endpointID: string) => Promise<import("../types").TailscaleWebhook>;
};
export default createPostureComponent;
