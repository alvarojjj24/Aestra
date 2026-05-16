import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';

export default function ProfileScreen() {
  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Profile</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">Connected services, PRs, goals, language, and settings placeholders.</Text>
      </View>
    </CinematicScreen>
  );
}
