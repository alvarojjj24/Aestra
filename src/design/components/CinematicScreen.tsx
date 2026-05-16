import { ReactNode } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

type Props = {
  children: ReactNode;
};

export function CinematicScreen({ children }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-obsidian">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingVertical: 24 }}>
        <View className="gap-4">{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
