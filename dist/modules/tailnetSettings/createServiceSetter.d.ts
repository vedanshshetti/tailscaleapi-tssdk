import { APIKey, TailscaleService } from "../../types";
/**
 * Creates or updates a virtual service in a tailnet.
 *
 * The service name is part of the URL and must match the name in the body.
 */
export default function createServiceSetter(apiKey: APIKey, tailnet: string, serviceName: string, body: TailscaleService): Promise<void>;
