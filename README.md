# AESTRA Mobile Scaffold (Expo + TypeScript)

Production-ready initial scaffold for AESTRA with cinematic UX structure and modular architecture.

## Stack

- Expo (managed) + React Native + TypeScript
- Expo Router
- NativeWind/Tailwind
- Zustand
- React Query (+ persistence)
- Reanimated
- React Native Skia (placeholder visualizations)
- React Native Vision Camera (nutrition photo flow scaffold)
- Supabase integration scaffold
- Strava/HealthKit/Google Fit integration scaffolds

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Configure environment
   ```bash
   cp .env.example .env
   ```
3. Run the app
   ```bash
   npx expo start
   ```

## Environment variables

- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- `EXPO_PUBLIC_STRAVA_CLIENT_ID`
- `EXPO_PUBLIC_STRAVA_REDIRECT_URI`

## Scripts

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`
- `npm run lint`
- `npm run typecheck`
- `npm run format`

## Structure

- `app/` routes (auth, onboarding, tabs)
- `src/design/` tokens + UI components
- `src/domain/` deterministic readiness/training engines
- `src/features/` AI coach + integrations scaffolds
- `src/integrations/` supabase + secure storage
- `src/services/` query client + offline queue
- `supabase/migrations/` schema draft + RLS placeholders

## Notes

- AI v1 is free/no-external-cost deterministic + rule-based.
- LLM integration interface is already scaffolded (`FutureLLMCoachModel`).
- Payment/subscriptions are intentionally left as architecture placeholders.
