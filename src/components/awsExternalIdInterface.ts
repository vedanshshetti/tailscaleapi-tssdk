import createAWSExternalIDInterface from "../modules/awsExternalID/createAWSExternalIDInterface";
import { APIKey } from "../types";

/** Creates the AWS external ID route interface for a tailnet. */
const createAWSExternalIDComponent = (apiKey: APIKey, tailnet: string) =>
  createAWSExternalIDInterface(apiKey, tailnet);

export default createAWSExternalIDComponent;
