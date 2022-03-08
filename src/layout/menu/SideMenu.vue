<template>
  <div class="layout-menu" :class="menuStore.isCollapse ? 'w-64' : 'w-200'">
    <div class="project-name">
      <img class="logo" src="../../assets/images/logo.png" :alt="systemName" :title="systemName" >
      <span class="m-l-10" v-if="!menuStore.isCollapse">{{ systemName }}</span>
    </div>
    <div class="project-menu">
      <el-menu
        class="el-sidebar-menu"
        router
        :collapse="menuStore.isCollapse"
        :default-active="defaultActive"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"

      >
        <MenuItem :routes="routes[0].children" />
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asyncRoutes } from '@/router/routes';
import { RouteRecordRaw, useRoute } from 'vue-router';
import {
  ref, Ref, onBeforeMount, watch,
} from 'vue';
import { useMenuStore } from '@/store/modules/menu';
import { systemName } from '@/settings';
import MenuItem from './MenuItem.vue';

const routes: Ref<RouteRecordRaw[]> = ref(asyncRoutes);
const defaultActive = ref('');
const route = useRoute();
const menuStore = useMenuStore();

const getDefaultActive = () => {
  defaultActive.value = route.fullPath;
};
onBeforeMount(() => {
  getDefaultActive();
});

watch(route, () => {
  getDefaultActive();
});

</script>

<style scoped>

</style>
