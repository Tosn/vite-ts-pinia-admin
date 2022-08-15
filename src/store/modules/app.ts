import { defineStore } from 'pinia';
import { store } from '@/store';
import { Device } from '@/enum';

export const useAppStore = defineStore({
  id: 'App',
  state: () => ({
    device: Device.PC,
  }),
  actions: {
    changeDevice(device: Device) {
      this.device = device;
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}

export default {
  useAppStore,
};
