import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { PrimaryButton } from '@/src/design/components/PrimaryButton';

const sports = ['Road Running', 'Trail Running', 'Cycling', 'Triathlon', 'HYROX', 'Ultra Marathon'];

export default function SportsScreen() {
  const router = useRouter();

  return (
    <CinematicScreen>
      <Text className="text-3xl font-bold text-white">Sports</Text>
      <View className="flex-row flex-wrap gap-2">
        {sports.map((sport) => (
          <Pressable key={sport} className="rounded-full border border-white/20 px-3 py-2">
            <Text className="text-silver">{sport}</Text>
          </Pressable>
        ))}
      </View>
      <PrimaryButton label="Next" onPress={() => router.push('/(onboarding)/preferences')} />
    </CinematicScreen>
  );
}
