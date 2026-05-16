import AsyncStorage from '@react-native-async-storage/async-storage';

export type QueueAction = {
  id: string;
  type: 'log_nutrition' | 'complete_session' | 'coach_feedback';
  payload: Record<string, unknown>;
  createdAt: string;
};

const QUEUE_KEY = 'aestra.offline.queue.v1';

export async function enqueueOfflineAction(action: QueueAction) {
  const current = await getOfflineQueue();
  const updated = [...current, action];
  await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(updated));
}

export async function getOfflineQueue(): Promise<QueueAction[]> {
  const raw = await AsyncStorage.getItem(QUEUE_KEY);
  return raw ? (JSON.parse(raw) as QueueAction[]) : [];
}

export async function clearOfflineQueue() {
  await AsyncStorage.removeItem(QUEUE_KEY);
}
