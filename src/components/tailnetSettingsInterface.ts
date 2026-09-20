import createTailnetSettingsInterface from "../modules/tailnetSettings/createTailnetSettingsInterface";
import { APIKey } from "../types";

/** Creates the tailnet settings route interface. */
const createTailnetSettingsComponent = (apiKey: APIKey, tailnet: string) =>
  createTailnetSettingsInterface(apiKey, tailnet);

export default createTailnetSettingsComponent;
