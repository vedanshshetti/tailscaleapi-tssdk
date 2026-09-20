import { ListTailnetKeysReturnType } from "../modules/keys/createTailnetKeysList";
import { APIKey, SetKeyBody, TailscaleKey } from "../types";
/** Creates the key-management route interface for a tailnet. */
declare const createKeysInterface: (apiKey: APIKey, tailnet: string) => {
    /** Lists keys visible to the API key. */
    listTailnetKeys: (all: boolean) => Promise<ListTailnetKeysReturnType>;
    /** Retrieves a key by ID. */
    getKey: (keyID: string) => Promise<TailscaleKey>;
    /** Creates a key. */
    createKey: (body: TailscaleKey) => Promise<TailscaleKey>;
    /** Deletes a key. */
    deleteKey: (keyID: string) => Promise<void>;
    /** Updates a key. */
    setKey: (keyID: string, body: SetKeyBody) => Promise<TailscaleKey>;
};
export default createKeysInterface;
