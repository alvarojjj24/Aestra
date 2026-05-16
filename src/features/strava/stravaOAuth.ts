import { secureStorage } from '@/src/integrations/storage/secureStorage';

const STRAVA_TOKEN_KEY = 'strava.tokens.v1';

export type StravaTokenPayload = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

export async function storeStravaTokens(tokens: StravaTokenPayload) {
  await secureStorage.setItem(STRAVA_TOKEN_KEY, JSON.stringify(tokens));
}

export async function loadStravaTokens() {
  const value = await secureStorage.getItem(STRAVA_TOKEN_KEY);
  return value ? (JSON.parse(value) as StravaTokenPayload) : null;
}

export function getStravaAuthUrl() {
  return 'https://www.strava.com/oauth/mobile/authorize';
}

export async function exchangeStravaCodePlaceholder(_code: string) {
  return { ok: false as const, reason: 'Implement in Supabase Edge Function' };
}
