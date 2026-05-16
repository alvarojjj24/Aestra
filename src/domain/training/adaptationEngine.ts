import { computeReadiness } from '@/src/domain/readiness/engine';

export type PlannedSession = {
  id: string;
  day: string;
  intensity: 'easy' | 'moderate' | 'hard';
  durationMinutes: number;
};

export function buildAdaptedWeek(sessions: PlannedSession[], readinessInput: Parameters<typeof computeReadiness>[0]) {
  const readiness = computeReadiness(readinessInput);

  return sessions.map((session) => {
    if (readiness.adaptationSignal === 'reduce' && session.intensity === 'hard') {
      return { ...session, intensity: 'easy' as const, durationMinutes: Math.round(session.durationMinutes * 0.75) };
    }

    if (readiness.adaptationSignal === 'push' && session.intensity === 'moderate') {
      return { ...session, intensity: 'hard' as const, durationMinutes: Math.round(session.durationMinutes * 1.1) };
    }

    return session;
  });
}
