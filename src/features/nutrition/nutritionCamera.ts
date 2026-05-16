export type VisionCameraPermissionStatus = 'granted' | 'denied' | 'not-determined' | 'restricted';

export async function requestNutritionCameraPermission() {
  const status: VisionCameraPermissionStatus = 'not-determined';
  return Promise.resolve(status);
}

export function getNutritionPhotoPipelinePlaceholder() {
  return {
    capture: 'Vision Camera capture',
    upload: 'Supabase Storage upload',
    analysis: 'Rule-based nutrition estimate v1',
  };
}
