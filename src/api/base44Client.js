import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "695310dcf55f7c77b7d1037f", 
  requiresAuth: true // Ensure authentication is required for all operations
});
