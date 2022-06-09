import { defineStore } from 'pinia';
import { store } from '@/store';
import { getUserInfo } from '@/api';
import { getToken, removeToken } from '@/utils/token';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {},
  }),
  actions: {
    async getUserInfo() {
      const token = getToken();
      if (token) {
        this.userInfo = await getUserInfo();
      }
    },
    loginOut() {
      removeToken();
      window.location.href = '/login';
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
