import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactNode } from 'react';
import { View } from 'react-native';

import { queryClient, queryPersister } from '@/src/services/queryClient';
import { useUiStore } from '@/src/state/uiStore';
import { ErrorBanner } from '@/src/ui/ErrorBanner';
import { LoadingOverlay } from '@/src/ui/LoadingOverlay';
import '@/src/i18n';

type Props = {
  children: ReactNode;
};

export function AppProviders({ children }: Props) {
  const isGlobalLoading = useUiStore((s) => s.isGlobalLoading);
  const globalError = useUiStore((s) => s.globalError);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: queryPersister, maxAge: 1000 * 60 * 60 * 24 }}
    >
      <View className="flex-1 bg-obsidian">
        {globalError ? <ErrorBanner message={globalError} /> : null}
        {children}
        {isGlobalLoading ? <LoadingOverlay /> : null}
      </View>
    </PersistQueryClientProvider>
  );
}
