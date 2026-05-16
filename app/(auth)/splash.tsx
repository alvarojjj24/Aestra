import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { PrimaryButton } from '@/src/design/components/PrimaryButton';

export default function SplashScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <CinematicScreen>
      <View className="mt-24 gap-4">
        <Text className="text-5xl font-black tracking-[6px] text-white">{t('appName')}</Text>
        <Text className="text-base text-silver">{t('tagline')}</Text>
      </View>
      <View className="mt-8 gap-3">
        <PrimaryButton label={t('auth.login')} onPress={() => router.push('/(auth)/login')} />
        <PrimaryButton label={t('auth.signup')} onPress={() => router.push('/(auth)/signup')} variant="ghost" />
        <PrimaryButton
          label={t('auth.continueGoogle')}
          onPress={() => router.push('/(auth)/oauth-google')}
          variant="ghost"
        />
        <PrimaryButton
          label={t('auth.continueStrava')}
          onPress={() => router.push('/(auth)/oauth-strava')}
          variant="ghost"
        />
      </View>
    </CinematicScreen>
  );
}
