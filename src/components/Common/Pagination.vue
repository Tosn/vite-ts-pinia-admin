<template>
  <div class="page-box">
    <el-pagination
      background
      layout="prev, pager, next, jumper, total"
      :total="total"
      small
      :page-size="pageSize || 10"
      :current-page="modelValue"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps(['modelValue', 'total', 'pageSize']);
const $emits = defineEmits(['currentChange', 'update:modelValue']);

const currentChange = (page: number) => {
  $emits('update:modelValue', page);
  $emits('currentChange');
};
</script>

<style scoped>

</style>
