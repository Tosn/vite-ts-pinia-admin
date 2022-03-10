import { defineStore } from 'pinia';
import router, { routes } from '@/router';

const homeRoute: MenuTag = { path: routes[0].path, name: routes[0].meta?.name as string, canClose: false };
export const useMenuStore = defineStore({
  id: 'menu',
  state(): {
    isCollapse: boolean;
    tagList: MenuTag[]
    } {
    return {
      isCollapse: false, // 是否折叠菜单
      tagList: [
        homeRoute,
      ],
    };
  },
  actions: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    },
    addTagList(tag: MenuTag) {
      // 如果传递tag 视为删除 否则为切换或者新增
      this.tagList.push(tag);
    },
    removeTag(inx: number, isActive: boolean) {
      this.tagList.splice(inx, 1);
      if (!isActive) return;
      if (this.tagList[inx]) {
        router.push(this.tagList[inx].path);
      } else {
        router.push(this.tagList[inx - 1].path);
      }
    },
  },
});

export default {
  useMenuStore,
};
