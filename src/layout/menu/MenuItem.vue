<template>
  <template v-for="menu in routes" :key="menu.path">
    <el-sub-menu v-if="menu.children && !menu.meta.isHidden" :index="menu.path">
      <template #title>
        <i :class="`iconfont m-r-6 ${menu.meta.icon}`"></i>
        <span>{{ menu.meta.name }}</span>
      </template>
      <MenuItem :routes="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="!menu.children && !menu.meta.isHidden" :index="menu.path" :route="menu.path">
      <i :class="`iconfont m-r-6 ${menu.meta.icon}`"></i>
      <template #title>{{ menu.meta.name }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps(['routes']);
</script>

<style scoped>

</style>
