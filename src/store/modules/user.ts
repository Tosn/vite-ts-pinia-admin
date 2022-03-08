import { defineStore } from 'pinia';
import { store } from '@/store';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Tosn',
  }),
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});

// need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}

export default {
  useUserStore,
};
