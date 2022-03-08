<template>
  <div class="header-tags">
    <ul>
      <router-link v-for="(tag, index) in menuStore.tagList" :key="tag.name" custom v-slot="{ navigate }" :to="tag.path">
        <li @click="navigate" :class="{ current: checkTagIsActive(tag) }">
          <span>{{ tag.name }}</span>
          <i v-if="tag.canClose" @click.stop="removeTag(index, checkTagIsActive(tag))" class="iconfont icon-close m-l-4"></i>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, RouteLocationNormalized } from 'vue-router';
import { useMenuStore } from '../../store/modules/menu';

const menuStore = useMenuStore();
const route = useRoute();

const checkRouteAddToStore = (r: RouteLocationNormalized): boolean => {
  if (r.meta.isHidden) { // 如果是隐藏的菜单 直接return
    return false;
  }
  const item: MenuTag = { path: r.fullPath, name: r.meta.name as string, canClose: true };

  if (menuStore.tagList.some((m: MenuTag) => m.name === item.name)) {
    return false;
  }
  menuStore.addTagList(item);
  return true;
};

watch(route, () => {
  checkRouteAddToStore(route);
});

checkRouteAddToStore(route);

const removeTag = (inx: number, isActive: boolean) => {
  menuStore.removeTag(inx, isActive);
};

const checkTagIsActive = (tag: MenuTag) => tag.name === route.meta.name;
</script>

<style scoped>

</style>
