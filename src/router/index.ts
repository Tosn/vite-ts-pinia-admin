import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import { asyncRoutes, staticRoutes } from './routes';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });
const routes: Array<RouteRecordRaw> = [
  ...asyncRoutes,
  ...staticRoutes,
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
