<template>
  <router-view></router-view>
</template>

<script setup lang="ts">

import { resizeHandler } from '@/utils/resize';
import { onBeforeMount, onBeforeUnmount } from 'vue';

resizeHandler();
onBeforeMount(() => {
  window.addEventListener('resize', resizeHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<style scoped>

</style>
