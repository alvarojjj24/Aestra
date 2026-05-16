import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';

export default function EventsScreen() {
  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Events Calendar</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">Race/event periodization scaffold with A/B/C priority placeholders.</Text>
      </View>
    </CinematicScreen>
  );
}
