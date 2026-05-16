export type HealthPermissions = {
  sleep: boolean;
  hrv: boolean;
  restingHeartRate: boolean;
};

export interface HealthAdapter {
  requestPermissions: () => Promise<HealthPermissions>;
  syncDailyMetrics: () => Promise<{ synced: boolean; provider: string }>;
}

export const healthKitAdapter: HealthAdapter = {
  async requestPermissions() {
    return { sleep: false, hrv: false, restingHeartRate: false };
  },
  async syncDailyMetrics() {
    return { synced: false, provider: 'healthkit' };
  },
};

export const googleFitAdapter: HealthAdapter = {
  async requestPermissions() {
    return { sleep: false, hrv: false, restingHeartRate: false };
  },
  async syncDailyMetrics() {
    return { synced: false, provider: 'google-fit' };
  },
};
