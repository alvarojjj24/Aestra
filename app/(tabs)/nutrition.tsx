import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { CinematicScreen } from '@/src/design/components/CinematicScreen';
import { getNutritionPhotoPipelinePlaceholder, requestNutritionCameraPermission } from '@/src/features/nutrition/nutritionCamera';

export default function NutritionScreen() {
  const [permission, setPermission] = useState<string>('unknown');

  useEffect(() => {
    void requestNutritionCameraPermission().then(setPermission);
  }, []);

  const flow = getNutritionPhotoPipelinePlaceholder();

  return (
    <CinematicScreen>
      <Text className="text-4xl font-black text-white">Nutrition</Text>
      <View className="rounded-2xl border border-white/10 bg-charcoal p-4">
        <Text className="text-silver">Camera permission: {permission}</Text>
        <Text className="mt-2 text-silver">{flow.capture}</Text>
        <Text className="text-silver">{flow.upload}</Text>
        <Text className="text-silver">{flow.analysis}</Text>
      </View>
    </CinematicScreen>
  );
}
