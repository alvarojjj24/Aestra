import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0f1115', borderTopColor: 'rgba(255,255,255,0.12)' },
        tabBarActiveTintColor: '#f5f6f8',
        tabBarInactiveTintColor: '#6d7380',
      }}
    >
      <Tabs.Screen name="home" options={{ title: t('tabs.home') }} />
      <Tabs.Screen name="training" options={{ title: t('tabs.training') }} />
      <Tabs.Screen name="recovery" options={{ title: t('tabs.recovery') }} />
      <Tabs.Screen name="nutrition" options={{ title: t('tabs.nutrition') }} />
      <Tabs.Screen name="events" options={{ title: t('tabs.events') }} />
      <Tabs.Screen name="insights" options={{ title: t('tabs.insights') }} />
      <Tabs.Screen name="profile" options={{ title: t('tabs.profile') }} />
      <Tabs.Screen name="coach" options={{ title: t('tabs.coach') }} />
    </Tabs>
  );
}
