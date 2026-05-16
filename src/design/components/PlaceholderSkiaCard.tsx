import { Canvas, Circle, Group, Paint } from '@shopify/react-native-skia';
import { Text, View } from 'react-native';

type Props = {
  title: string;
  subtitle: string;
};

export function PlaceholderSkiaCard({ title, subtitle }: Props) {
  return (
    <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
      <Text className="text-sm uppercase tracking-[2px] text-ash">{title}</Text>
      <Text className="mb-3 mt-1 text-base text-silver">{subtitle}</Text>
      <Canvas style={{ height: 80, width: '100%' }}>
        <Group>
          <Paint color="#7f8aa3" opacity={0.35} />
          <Circle cx={45} cy={40} r={28} />
        </Group>
        <Circle cx={45} cy={40} r={20} color="#d2b58f" opacity={0.8} />
      </Canvas>
    </View>
  );
}
