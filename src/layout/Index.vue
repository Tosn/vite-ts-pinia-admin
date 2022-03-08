<template>
  <div class="layout-section">
    <Menu />
    <div class="layout-article">
      <Header />
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './header/Index.vue';
import Menu from './menu/SideMenu.vue';
</script>

<style scoped>

</style>
