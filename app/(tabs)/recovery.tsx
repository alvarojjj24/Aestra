import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';

export default function RecoveryScreen() {
  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Recovery Hub</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">Sleep, mobility, hydration, and recovery score placeholders.</Text>
      </View>
    </CinematicScreen>
  );
}
