/**
 * SUDHARSHAN_TECH — Unified API Routing Utility
 * Dynamically resolves API endpoints for local Vite proxy development
 * or cross-origin production deployments via VITE_API_BASE_URL.
 */

// If VITE_API_BASE_URL is defined (e.g., https://sudharshantech.com), prefix endpoints.
// Otherwise, fall back to relative paths for local development proxy (/api/*).
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

export function getApiUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}
