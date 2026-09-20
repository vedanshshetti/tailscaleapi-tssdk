import { TailscaleAPIBaseURL } from "../../constants";
import {
  APIKey,
  ListContactsReturnType,
  ListPostureIntegrationsReturnType,
  ListWebhooksReturnType,
  PostureIntegration,
  TailscaleContact,
  TailscaleWebhook
} from "../../types";
import { requestJson, requestVoid } from "../request";

/** Provides posture, contact, and webhook routes for a tailnet. */
const createPostureInterface = (apiKey: APIKey, tailnet: string) => ({
  listPostureIntegrations: (): Promise<ListPostureIntegrationsReturnType> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/posture/integrations`,
      "posture.listPostureIntegrations"
    ),
  createPostureIntegration: (
    body: Record<string, unknown>
  ): Promise<PostureIntegration> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/posture/integrations`,
      "posture.createPostureIntegration",
      { method: "POST", body: JSON.stringify(body) },
      true
    ),
  getPostureIntegration: (integrationID: string): Promise<PostureIntegration> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/posture/integrations/${integrationID}`,
      "posture.getPostureIntegration"
    ),
  updatePostureIntegration: (
    integrationID: string,
    body: Record<string, unknown>
  ): Promise<PostureIntegration> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/posture/integrations/${integrationID}`,
      "posture.updatePostureIntegration",
      { method: "PATCH", body: JSON.stringify(body) },
      true
    ),
  deletePostureIntegration: (integrationID: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/posture/integrations/${integrationID}`,
      "posture.deletePostureIntegration",
      { method: "DELETE" }
    ),
  listContacts: (contactType: string): Promise<ListContactsReturnType> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/contacts/${contactType}`,
      "posture.listContacts"
    ),
  updateContacts: (
    contactType: string,
    body: Record<string, unknown>
  ): Promise<TailscaleContact> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/contacts/${contactType}`,
      "posture.updateContacts",
      { method: "PATCH", body: JSON.stringify(body) },
      true
    ),
  resendContactVerificationEmail: (contactType: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/contacts/${contactType}/resend-verification-email`,
      "posture.resendContactVerificationEmail",
      { method: "POST" }
    ),
  listWebhooks: (): Promise<ListWebhooksReturnType> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/webhooks`,
      "posture.listWebhooks"
    ),
  createWebhook: (body: Record<string, unknown>): Promise<TailscaleWebhook> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/tailnet/${tailnet}/webhooks`,
      "posture.createWebhook",
      { method: "POST", body: JSON.stringify(body) },
      true
    ),
  getWebhook: (endpointID: string): Promise<TailscaleWebhook> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/webhooks/${endpointID}`,
      "posture.getWebhook"
    ),
  updateWebhook: (
    endpointID: string,
    body: Record<string, unknown>
  ): Promise<TailscaleWebhook> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/webhooks/${endpointID}`,
      "posture.updateWebhook",
      { method: "PATCH", body: JSON.stringify(body) },
      true
    ),
  deleteWebhook: (endpointID: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/webhooks/${endpointID}`,
      "posture.deleteWebhook",
      { method: "DELETE" }
    ),
  testWebhook: (endpointID: string): Promise<void> =>
    requestVoid(
      apiKey,
      `${TailscaleAPIBaseURL}/webhooks/${endpointID}/test`,
      "posture.testWebhook",
      { method: "POST" }
    ),
  rotateWebhook: (endpointID: string): Promise<TailscaleWebhook> =>
    requestJson(
      apiKey,
      `${TailscaleAPIBaseURL}/webhooks/${endpointID}/rotate`,
      "posture.rotateWebhook",
      { method: "POST" }
    )
});

export default createPostureInterface;
