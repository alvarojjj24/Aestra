import { useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { PrimaryButton } from '@/src/design/components/PrimaryButton';

export default function PRsScreen() {
  const router = useRouter();

  return (
    <CinematicScreen>
      <Text className="text-3xl font-bold text-white">PRs</Text>
      <View className="gap-3">
        {['5K', '10K', 'Half Marathon', 'Marathon'].map((field) => (
          <TextInput key={field} className="rounded-xl border border-white/15 p-4 text-white" placeholder={field} placeholderTextColor="#6d7380" />
        ))}
      </View>
      <PrimaryButton label="Next" onPress={() => router.push('/(onboarding)/sports')} />
    </CinematicScreen>
  );
}
