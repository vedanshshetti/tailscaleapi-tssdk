import { APIKey } from "../types";
/** Creates the posture route interface for a tailnet. */
declare const createPostureComponent: (apiKey: APIKey, tailnet: string) => {
    listPostureIntegrations: () => Promise<import("..").ListPostureIntegrationsReturnType>;
    createPostureIntegration: (body: Record<string, unknown>) => Promise<import("..").PostureIntegration>;
    getPostureIntegration: (integrationID: string) => Promise<import("..").PostureIntegration>;
    updatePostureIntegration: (integrationID: string, body: Record<string, unknown>) => Promise<import("..").PostureIntegration>;
    deletePostureIntegration: (integrationID: string) => Promise<void>;
    listContacts: (contactType: string) => Promise<import("..").ListContactsReturnType>;
    updateContacts: (contactType: string, body: Record<string, unknown>) => Promise<import("..").TailscaleContact>;
    resendContactVerificationEmail: (contactType: string) => Promise<void>;
    listWebhooks: () => Promise<import("..").ListWebhooksReturnType>;
    createWebhook: (body: Record<string, unknown>) => Promise<import("..").TailscaleWebhook>;
    getWebhook: (endpointID: string) => Promise<import("..").TailscaleWebhook>;
    updateWebhook: (endpointID: string, body: Record<string, unknown>) => Promise<import("..").TailscaleWebhook>;
    deleteWebhook: (endpointID: string) => Promise<void>;
    testWebhook: (endpointID: string) => Promise<void>;
    rotateWebhook: (endpointID: string) => Promise<import("..").TailscaleWebhook>;
};
export default createPostureComponent;
