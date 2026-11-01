# Tailscale API wrapper

TypeScript SDK for the [Tailscale API v2](https://tailscale.com/api). This is
community-maintained software and is not created by, endorsed by, or affiliated
with Tailscale Inc.

## Installation

```sh
npm install @vedanshshetti/tailscale-api-wrapper
```

The package ships compiled JavaScript and TypeScript declarations. It is an
ESM package and requires a runtime with `fetch` (Node.js 18+).

## Quick start

```ts
import Tailscale from "@vedanshshetti/tailscale-api-wrapper";

const tailscale = Tailscale("tskey-api-your-api-key");

const devices = tailscale.devices("device-id-123");
const deviceList = await devices.listTailnetDevices("example.com");

const policy = await tailscale.policyFile("example.com").getPolicyFile();
const dns = await tailscale.dns("example.com").getDNSConfiguration();
```

API keys are never included in thrown error messages; only a short masked form
is used for diagnostics. Keep keys in environment variables and do not commit
them to source control.

## API surface

All methods return promises and reject when the Tailscale API returns a
non-2xx response.

| Interface | Routes |
| --- | --- |
| `devices(deviceId)` | List and retrieve devices; authorize, delete, rename, tag, expire, and update device keys or IPv4 addresses; manage subnet routes and posture attributes |
| `policyFile(tailnet)` | Read and update the policy file; validate/test it; preview rule matches |
| `keys(tailnet)` | List, retrieve, create, update, and revoke keys |
| `dns(tailnet)` | Manage nameservers, preferences, search paths, split DNS, and DNS configuration |
| `users(tailnet)` | List, retrieve, approve, suspend, restore, delete, and change user roles |
| `userInvites(tailnet)` | List, create, retrieve, resend, and delete user invitations |
| `deviceInvites(deviceId)` | List, create, retrieve, resend, accept, and delete device invitations |
| `posture(tailnet)` | Manage posture integrations, contacts, and webhooks |
| `tailnetSettings(tailnet)` | Manage tailnet settings, services, service-device approvals, and OAuth apps |
| `organizations(organization)` | List/create organization tailnets and delete a tailnet |
| `logging(tailnet)` | Read logging configuration and network logs; manage log streams |
| `awsExternalID(tailnet)` | Create an AWS external ID and validate an AWS trust policy |

Use the generated declarations in `dist/` or your editor's autocomplete for
request and response types. Shared types can be imported from the package:

```ts
import type {
  APIKey,
  SetDeviceRoutesBody,
  SetPolicyFileBody,
  TailscaleKey
} from "@vedanshshetti/tailscale-api-wrapper";
```

## Development

```sh
npm install
npm run compile
npm test
```

`npm run compile` writes JavaScript, source maps, and declarations to `dist/`.

## License

Licensed under the [EUPL-1.2](./LICENSE).
