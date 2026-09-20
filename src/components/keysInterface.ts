import createKeyCreation from "../modules/keys/createKeyCreation";
import createKeyDeletion from "../modules/keys/createKeyDeletion";
import createKeySetter from "../modules/keys/createKeySetter";
import createTailnetKeysLister, {
  ListTailnetKeysReturnType
} from "../modules/keys/createTailnetKeysList";
import { APIKey, TailscaleKey, SetKeyBody } from "../types";

/**
 * Creates an interface for managing keys in the Tailscale API.
 * This provides methods for managing auth keys, API access tokens, and trust credentials.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to manage keys
 * @returns {Object} An object with methods for key management
 */
const createKeysInterface = (apiKey: APIKey, tailnet: string) => ({
  /**
   * Lists keys (auth keys, API access tokens, and trust credentials) for the given tailnet.
   *
   * If the parameter {all} is not specified or is false, the set of keys returned depends on the access token used:
   * - If the API call is made with a user-owned API access token, this returns only the keys owned by that user.
   * - If the API call is made with an access token derived from an OAuth client, this returns all OAuth clients for the tailnet.
   * - If the API call is made with an access token derived from a federated identity, this returns all federated identities for the tailnet.
   *
   * @param all - Determines whether all keys should be listed (true) or only keys accessible to the current API key (false)
   * @returns {Promise<ListTailnetKeysReturnType>} A promise resolving to an object containing an array of key objects
   * @throws {Error} If the API request fails
   */
  listTailnetKeys: (all: boolean): Promise<ListTailnetKeysReturnType> =>
    createTailnetKeysLister(apiKey, tailnet, all),
  /**
   * Creates a new key (auth key, API access token, or trust credential) for the given tailnet.
   *
   * @param body - The new key configuration to be created
   * @returns {Promise<TailscaleKey>} A promise resolving to the created key object
   * @throws {Error} If the API request fails
   */
  createKey: (body: TailscaleKey): Promise<TailscaleKey> =>
    createKeyCreation(apiKey, tailnet, body),
  /**
   * Deletes a key (auth key, API access token, or trust credential) by its ID.
   *
   * @param keyID - The unique identifier of the key to delete. Can be found in the Admin Console.
   * @returns {Promise<void>} A promise that resolves when the key is successfully deleted
   * @throws {Error} If the API request fails
   */
  deleteKey: (keyID: string): Promise<void> =>
    createKeyDeletion(apiKey, tailnet, keyID),
  /**
   * Sets or updates the configuration of an existing key by its ID.
   *
   * @param keyID - The unique identifier of the key to update
   * @param body - The new key configuration object
   * @returns {Promise<TailscaleKey>} A promise resolving to the newly set key object
   * @throws {Error} If the API request fails
   */
  setKey: (keyID: string, body: SetKeyBody): Promise<TailscaleKey> =>
    createKeySetter(apiKey, tailnet, keyID, body)
});

export default createKeysInterface;
