// Centralized configuration for client-side values
// Set NEXT_PUBLIC_ITEM_COST in your environment to override the default value (build-time).
export const ITEM_COST = Number(process.env.NEXT_PUBLIC_ITEM_COST ?? 400);
