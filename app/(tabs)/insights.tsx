import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';

export default function InsightsScreen() {
  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Insights Timeline</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">AI fatigue/consistency/recovery timeline feed placeholder.</Text>
      </View>
    </CinematicScreen>
  );
}
