import createOrganizationsInterface from "../modules/organizations/createOrganizationsInterface";
import { APIKey } from "../types";

/** Creates the organization route interface. */
const createOrganizationsComponent = (apiKey: APIKey, organization: string) =>
  createOrganizationsInterface(apiKey, organization);

export default createOrganizationsComponent;
