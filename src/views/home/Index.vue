<template>
  <div>
    page index
  </div>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/api';

const syncFn = async () => {
  const ret = await getUserInfo();
  console.log(ret);
};
syncFn();
</script>

<style scoped>

</style>
