import createPostureInterface from "../modules/posture/createPostureInterface";
import { APIKey } from "../types";

/** Creates the posture route interface for a tailnet. */
const createPostureComponent = (apiKey: APIKey, tailnet: string) =>
  createPostureInterface(apiKey, tailnet);

export default createPostureComponent;
