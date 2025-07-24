import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const asyncStorage = {
  getItem: async (key: string) => await AsyncStorage.getItem(key),
  setItem: async (key: string, value: string) => await AsyncStorage.setItem(key, value),
  removeItem: async (key: string) => await AsyncStorage.removeItem(key),
};

const useAuthStore = create<State>()(
  persist(
    (set) => ({
      loggedIn: false,
      setLoggedIn(loggedIn) {
        set({ loggedIn });
      },
    }),
    {
      name: "async-storage",
      storage: createJSONStorage(() => asyncStorage),
    }
  )
);
export default useAuthStore;