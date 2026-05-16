import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { getStravaAuthUrl } from '@/src/features/strava/stravaOAuth';

export default function StravaOAuthPlaceholder() {
  return (
    <CinematicScreen>
      <Text className="text-2xl font-bold text-white">Strava OAuth</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">{getStravaAuthUrl()}</Text>
      </View>
    </CinematicScreen>
  );
}
