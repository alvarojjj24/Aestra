import { Text, View } from 'react-native';

export function ErrorBanner({ message }: { message: string }) {
  return (
    <View className="rounded-xl border border-red-400/35 bg-red-900/25 p-3">
      <Text className="text-sm text-red-200">{message}</Text>
    </View>
  );
}
