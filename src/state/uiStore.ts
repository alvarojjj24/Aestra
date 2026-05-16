import { create } from 'zustand';

type UiState = {
  isGlobalLoading: boolean;
  globalError: string | null;
  setGlobalLoading: (value: boolean) => void;
  setGlobalError: (value: string | null) => void;
};

export const useUiStore = create<UiState>((set) => ({
  isGlobalLoading: false,
  globalError: null,
  setGlobalLoading: (value) => set({ isGlobalLoading: value }),
  setGlobalError: (value) => set({ globalError: value }),
}));
