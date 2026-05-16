import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { PlaceholderSkiaCard } from '@/src/design/components/PlaceholderSkiaCard';

export default function HomeScreen() {
  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Command Center</Text>
      <View className="gap-3">
        <PlaceholderSkiaCard title="Readiness" subtitle="Daily score ring placeholder" />
        <PlaceholderSkiaCard title="Fatigue" subtitle="Training load heatmap placeholder" />
      </View>
    </CinematicScreen>
  );
}
