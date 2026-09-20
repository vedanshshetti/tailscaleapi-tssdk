import { APIKey } from "../../types";
export type ListTailnetDevicesReturnType = {
    devices: {
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
    }[];
};
/**
 * Lists all devices for a given tailnet.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param tailnet - The tailnet name for which to list devices
 * @returns {Promise<ListTailnetDevicesReturnType>} A promise resolving to an object containing an array of device objects
 * @throws {Error} If the API request fails
 */
export default function createDeviceLister(apiKey: APIKey, tailnet: string): Promise<ListTailnetDevicesReturnType>;
