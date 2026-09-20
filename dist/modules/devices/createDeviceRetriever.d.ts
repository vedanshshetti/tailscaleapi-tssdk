import { APIKey } from "../../types";
export type GetDeviceReturnType = {
    addresses: string[];
    id: string;
    nodeId: string;
    user: string;
    name: string;
    hostname: string;
    clientVersion: string;
    updateAvailable: boolean;
    os: string;
    created: string;
    connectedToControl: boolean;
    lastSeen: string;
    keyExpiryDisabled: boolean;
    expires: string;
    authorized: boolean;
    isExternal: boolean;
    multipleConnections: boolean;
    machineKey: string;
    nodeKey: string;
    blocksIncomingConnections: boolean;
    enabledRoutes: string[];
    advertisedRoutes: string[];
    clientConnectivity: {
        endpoints: string[];
        latency: {
            [region: string]: {
                latencyMs: number;
                preferred?: boolean;
            };
        };
        mappingVariesByDestIP: boolean;
        clientSupports: {
            hairPinning: boolean | null;
            ipv6: boolean;
            pcp: boolean;
            pmp: boolean;
            udp: boolean;
            upnp: boolean;
        };
    };
    tags: string[];
    tailnetLockError: string;
    tailnetLockKey: string;
    sshEnabled: boolean;
    postureIdentity: {
        serialNumbers: string[];
    };
    isEphemeral: boolean;
    distro: {
        name: string;
        version: string;
        codeName: string;
    };
};
/**
 * Retrieves information for a specific device by its ID.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param deviceID - The unique identifier of the device to retrieve
 * @returns {Promise<GetDeviceReturnType>} A promise resolving to the device object
 * @throws {Error} If the API request fails
 */
export default function createDeviceRetriever(apiKey: APIKey, deviceID: string): Promise<GetDeviceReturnType>;
