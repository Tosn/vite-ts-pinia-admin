import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken, removeToken } from '@/utils/token';
import { useUserStoreWithOut } from '@/store/modules/user';
import { asyncRoutes, staticRoutes } from './routes';

NProgress.configure({ showSpinner: false });
export const routes: Array<RouteRecordRaw> = [
  ...asyncRoutes,
  ...staticRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 白名单
const whiteList = ['/login'];

router.beforeEach(async (to, from) => {
  NProgress.start();
  const token = getToken();
  // 如果不是白名单
  if (!whiteList.includes(to.path)) {
    if (token) {
      // 如果有token 进行获取用户信息操作
      try {
        const { userInfo } = useUserStoreWithOut();
        if (!userInfo.name) {
          await useUserStoreWithOut().getUserInfo();
        }
      } catch (error) {
        removeToken();
        router.replace('/login');
      }
    } else {
      // 没有token直接返回登录页
      router.replace('/login');
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
