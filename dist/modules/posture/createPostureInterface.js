import { TailscaleAPIBaseURL } from "../../constants";
import { requestJson, requestVoid } from "../request";
/** Provides posture, contact, and webhook routes for a tailnet. */
const createPostureInterface = (apiKey, tailnet) => ({
    listPostureIntegrations: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/posture/integrations`, "posture.listPostureIntegrations"),
    createPostureIntegration: (body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/posture/integrations`, "posture.createPostureIntegration", { method: "POST", body: JSON.stringify(body) }, true),
    getPostureIntegration: (integrationID) => requestJson(apiKey, `${TailscaleAPIBaseURL}/posture/integrations/${integrationID}`, "posture.getPostureIntegration"),
    updatePostureIntegration: (integrationID, body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/posture/integrations/${integrationID}`, "posture.updatePostureIntegration", { method: "PATCH", body: JSON.stringify(body) }, true),
    deletePostureIntegration: (integrationID) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/posture/integrations/${integrationID}`, "posture.deletePostureIntegration", { method: "DELETE" }),
    listContacts: (contactType) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/contacts/${contactType}`, "posture.listContacts"),
    updateContacts: (contactType, body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/contacts/${contactType}`, "posture.updateContacts", { method: "PATCH", body: JSON.stringify(body) }, true),
    resendContactVerificationEmail: (contactType) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/contacts/${contactType}/resend-verification-email`, "posture.resendContactVerificationEmail", { method: "POST" }),
    listWebhooks: () => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/webhooks`, "posture.listWebhooks"),
    createWebhook: (body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/tailnet/${tailnet}/webhooks`, "posture.createWebhook", { method: "POST", body: JSON.stringify(body) }, true),
    getWebhook: (endpointID) => requestJson(apiKey, `${TailscaleAPIBaseURL}/webhooks/${endpointID}`, "posture.getWebhook"),
    updateWebhook: (endpointID, body) => requestJson(apiKey, `${TailscaleAPIBaseURL}/webhooks/${endpointID}`, "posture.updateWebhook", { method: "PATCH", body: JSON.stringify(body) }, true),
    deleteWebhook: (endpointID) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/webhooks/${endpointID}`, "posture.deleteWebhook", { method: "DELETE" }),
    testWebhook: (endpointID) => requestVoid(apiKey, `${TailscaleAPIBaseURL}/webhooks/${endpointID}/test`, "posture.testWebhook", { method: "POST" }),
    rotateWebhook: (endpointID) => requestJson(apiKey, `${TailscaleAPIBaseURL}/webhooks/${endpointID}/rotate`, "posture.rotateWebhook", { method: "POST" })
});
export default createPostureInterface;
//# sourceMappingURL=createPostureInterface.js.map