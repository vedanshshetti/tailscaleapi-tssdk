import { APIKey, TailscaleUser, UserRole } from "../../types";
/**
 * Updates the role for a user.
 *
 * @param apiKey - The Tailscale API key (must start with 'tskey-api-')
 * @param userID - The Tailscale user ID.
 * @param role - The role to assign to the user.
 * @returns {Promise<TailscaleUser>} A promise resolving to the updated user record.
 */
export default function createUserRoleSetter(apiKey: APIKey, userID: string, role: UserRole): Promise<TailscaleUser>;
