import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';

export default function GoogleOAuthPlaceholder() {
  return (
    <CinematicScreen>
      <Text className="text-2xl font-bold text-white">Google OAuth</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">Supabase OAuth redirect placeholder (implement provider config in dashboard).</Text>
      </View>
    </CinematicScreen>
  );
}
