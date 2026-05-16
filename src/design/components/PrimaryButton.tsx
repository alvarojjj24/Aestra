import { Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'solid' | 'ghost';
};

export function PrimaryButton({ label, onPress, variant = 'solid' }: Props) {
  const classes =
    variant === 'solid'
      ? 'bg-ion/90 border border-ion'
      : 'bg-charcoal border border-white/10';

  return (
    <Pressable className={`w-full rounded-xl px-4 py-4 ${classes}`} onPress={onPress}>
      <Text className="text-center text-base font-semibold text-white">{label}</Text>
    </Pressable>
  );
}
