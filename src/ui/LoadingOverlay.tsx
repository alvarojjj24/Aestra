import { ActivityIndicator, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export function LoadingOverlay() {
  const { t } = useTranslation();

  return (
    <View className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-charcoal/90 p-4">
      <View className="flex-row items-center gap-3">
        <ActivityIndicator color="#f5f6f8" />
        <Text className="text-silver">{t('status.loading')}</Text>
      </View>
    </View>
  );
}
