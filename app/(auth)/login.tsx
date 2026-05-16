import { useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { PrimaryButton } from '@/src/design/components/PrimaryButton';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <CinematicScreen>
      <Text className="text-3xl font-bold text-white">Login</Text>
      <View className="gap-3">
        <TextInput className="rounded-xl border border-white/15 p-4 text-white" placeholder="Email" placeholderTextColor="#6d7380" />
        <TextInput
          className="rounded-xl border border-white/15 p-4 text-white"
          placeholder="Password"
          placeholderTextColor="#6d7380"
          secureTextEntry
        />
      </View>
      <PrimaryButton label="Continue" onPress={() => router.push('/(onboarding)/user-data')} />
      <PrimaryButton label="Continue with Google" onPress={() => router.push('/(auth)/oauth-google')} variant="ghost" />
      <PrimaryButton label="Continue with Strava" onPress={() => router.push('/(auth)/oauth-strava')} variant="ghost" />
    </CinematicScreen>
  );
}
