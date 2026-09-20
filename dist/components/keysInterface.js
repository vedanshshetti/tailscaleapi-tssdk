import createKeyCreation from "../modules/keys/createKeyCreation";
import createKeyDeletion from "../modules/keys/createKeyDeletion";
import createKeyRetriever from "../modules/keys/createKeyRetriever";
import createKeySetter from "../modules/keys/createKeySetter";
import createTailnetKeysLister from "../modules/keys/createTailnetKeysList";
/** Creates the key-management route interface for a tailnet. */
const createKeysInterface = (apiKey, tailnet) => ({
    /** Lists keys visible to the API key. */
    listTailnetKeys: (all) => createTailnetKeysLister(apiKey, tailnet, all),
    /** Retrieves a key by ID. */
    getKey: (keyID) => createKeyRetriever(apiKey, tailnet, keyID),
    /** Creates a key. */
    createKey: (body) => createKeyCreation(apiKey, tailnet, body),
    /** Deletes a key. */
    deleteKey: (keyID) => createKeyDeletion(apiKey, tailnet, keyID),
    /** Updates a key. */
    setKey: (keyID, body) => createKeySetter(apiKey, tailnet, keyID, body)
});
export default createKeysInterface;
//# sourceMappingURL=keysInterface.js.map