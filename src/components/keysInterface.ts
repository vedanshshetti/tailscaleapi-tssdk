import createKeyCreation from "../modules/keys/createKeyCreation";
import createKeyDeletion from "../modules/keys/createKeyDeletion";
import createKeyRetriever from "../modules/keys/createKeyRetriever";
import createKeySetter from "../modules/keys/createKeySetter";
import createTailnetKeysLister, {
  ListTailnetKeysReturnType
} from "../modules/keys/createTailnetKeysList";
import { APIKey, SetKeyBody, TailscaleKey } from "../types";

/** Creates the key-management route interface for a tailnet. */
const createKeysInterface = (apiKey: APIKey, tailnet: string) => ({
  /** Lists keys visible to the API key. */
  listTailnetKeys: (all: boolean): Promise<ListTailnetKeysReturnType> =>
    createTailnetKeysLister(apiKey, tailnet, all),
  /** Retrieves a key by ID. */
  getKey: (keyID: string): Promise<TailscaleKey> =>
    createKeyRetriever(apiKey, tailnet, keyID),
  /** Creates a key. */
  createKey: (body: TailscaleKey): Promise<TailscaleKey> =>
    createKeyCreation(apiKey, tailnet, body),
  /** Deletes a key. */
  deleteKey: (keyID: string): Promise<void> =>
    createKeyDeletion(apiKey, tailnet, keyID),
  /** Updates a key. */
  setKey: (keyID: string, body: SetKeyBody): Promise<TailscaleKey> =>
    createKeySetter(apiKey, tailnet, keyID, body)
});

export default createKeysInterface;
