export type ReadinessInput = {
  sleepMinutes: number;
  hrvDelta: number;
  restingHrDelta: number;
  acuteLoad: number;
  consistency: number;
};

export type ReadinessResult = {
  readinessScore: number;
  fatigueScore: number;
  adaptationSignal: 'reduce' | 'maintain' | 'push';
};

export function computeReadiness(input: ReadinessInput): ReadinessResult {
  const readinessScore = Math.max(
    0,
    Math.min(
      100,
      50 +
        input.sleepMinutes / 12 +
        input.hrvDelta * 2 -
        input.restingHrDelta * 2 -
        input.acuteLoad / 3 +
        input.consistency / 2,
    ),
  );

  const fatigueScore = Math.max(0, Math.min(100, 100 - readinessScore + input.acuteLoad / 2));

  const adaptationSignal = readinessScore >= 70 ? 'push' : readinessScore >= 45 ? 'maintain' : 'reduce';

  return { readinessScore, fatigueScore, adaptationSignal };
}
