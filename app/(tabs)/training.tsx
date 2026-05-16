import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';

export default function TrainingScreen() {
  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Training Week / Block</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">Timeline scaffold for adaptive sessions, load, and AI notes.</Text>
      </View>
    </CinematicScreen>
  );
}
