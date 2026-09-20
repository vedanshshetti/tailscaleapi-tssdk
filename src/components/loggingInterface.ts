import createLoggingInterface from "../modules/logging/createLoggingInterface";
import { APIKey } from "../types";

/** Creates the logging route interface for a tailnet. */
const createLoggingComponent = (apiKey: APIKey, tailnet: string) =>
  createLoggingInterface(apiKey, tailnet);

export default createLoggingComponent;
