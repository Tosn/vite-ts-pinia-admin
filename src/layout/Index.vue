<template>
  <div class="layout-section" :class="[
    menuStore.isCollapse ? 'hideSidebar': 'openSidebar',
    isMobile ? 'mobile' : ''
  ]">
  <div v-if="isMobile && !menuStore.isCollapse" class="drawer-bg" @click="handleClickOutside" />
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <Menu />
  </el-scrollbar>
    <div class="layout-article">
      <Header />
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMenuStore } from '@/store/modules/menu';
import { useAppStore } from '@/store/modules/app';
import { Device } from '@/enum';
import Menu from './menu/SideMenu.vue';
import Header from './header/Index.vue';

const menuStore = useMenuStore();
const appStore = useAppStore();

const isMobile = computed(() => appStore.device === Device.MOBILE);

const handleClickOutside = () => {
  menuStore.closeMenu();
};
</script>

<style scoped>
.scrollbar-wrapper {
  overflow-x: hidde !important;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
