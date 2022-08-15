import { useAppStoreWithOut } from '@/store/modules/app';
import { useMenuStoreWithOut } from '@/store/modules/menu';
import { Device } from '@/enum';
import { isMobile } from './public';

const appStore = useAppStoreWithOut();
const menuStore = useMenuStoreWithOut();
export const resizeHandler = () => {
  if (!document.hidden) {
    appStore.changeDevice(
      isMobile() ? Device.MOBILE : Device.PC,
    );
    if (isMobile()) {
      menuStore.closeMenu();
    }
  }
};

export default {
  resizeHandler,
};
