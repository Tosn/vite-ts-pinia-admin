import { RouteRecordRaw } from 'vue-router';
// import BlankLayout from '@/layout/BlankLayout.vue';
/**
 * @meta
 * icon 图标
 * isHidden 是否隐藏，如果隐藏 则不显示在菜单栏
 * name 显示的文案
 */
export const asyncRoutes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/Index.vue'),
    meta: {
      name: '首页',
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/home/Index.vue'),
        meta: {
          icon: 'icon-home2',
          name: '首页',
        },
      },
      // {
      //   path: '/table',
      //   component: BlankLayout,
      //   redirect: '/table/all',
      //   meta: {
      //     icon: 'icon-table',
      //     name: '表格',
      //   },
      //   children: [
      //     {
      //       path: '/table/all',
      //       component: () => import('@/views/table/All.vue'),
      //       meta: {
      //         icon: 'icon-table',
      //         name: '全部',
      //       },
      //     },
      //     {
      //       path: '/table/list',
      //       component: () => import('@/views/table/All.vue'),
      //       meta: {
      //         icon: 'icon-table',
      //         name: '列表',
      //       },
      //     },
      //   ],
      // },
    ],
  },
];

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/reg/Login.vue'),
  },
  // {
  //   path: '/:w+',
  //   redirect: '/',
  // },
];
