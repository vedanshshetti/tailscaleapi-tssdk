import { APIKey, ListContactsReturnType, ListPostureIntegrationsReturnType, ListWebhooksReturnType, PostureIntegration, TailscaleContact, TailscaleWebhook } from "../../types";
/** Provides posture, contact, and webhook routes for a tailnet. */
declare const createPostureInterface: (apiKey: APIKey, tailnet: string) => {
    listPostureIntegrations: () => Promise<ListPostureIntegrationsReturnType>;
    createPostureIntegration: (body: Record<string, unknown>) => Promise<PostureIntegration>;
    getPostureIntegration: (integrationID: string) => Promise<PostureIntegration>;
    updatePostureIntegration: (integrationID: string, body: Record<string, unknown>) => Promise<PostureIntegration>;
    deletePostureIntegration: (integrationID: string) => Promise<void>;
    listContacts: (contactType: string) => Promise<ListContactsReturnType>;
    updateContacts: (contactType: string, body: Record<string, unknown>) => Promise<TailscaleContact>;
    resendContactVerificationEmail: (contactType: string) => Promise<void>;
    listWebhooks: () => Promise<ListWebhooksReturnType>;
    createWebhook: (body: Record<string, unknown>) => Promise<TailscaleWebhook>;
    getWebhook: (endpointID: string) => Promise<TailscaleWebhook>;
    updateWebhook: (endpointID: string, body: Record<string, unknown>) => Promise<TailscaleWebhook>;
    deleteWebhook: (endpointID: string) => Promise<void>;
    testWebhook: (endpointID: string) => Promise<void>;
    rotateWebhook: (endpointID: string) => Promise<TailscaleWebhook>;
};
export default createPostureInterface;
