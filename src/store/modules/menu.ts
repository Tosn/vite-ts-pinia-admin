import { defineStore } from 'pinia';
import router from '@/router';

export const useMenuStore = defineStore({
  id: 'menu',
  state(): {
    isCollapse: boolean;
    tagList: MenuTag[]
    } {
    return {
      isCollapse: false, // 是否折叠菜单
      tagList: [
        { path: '/', name: '首页', canClose: false },
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
