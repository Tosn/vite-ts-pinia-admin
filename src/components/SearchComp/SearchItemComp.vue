<template>
  <!-- 根据type 判断类型 -->
  <template v-if="params?.type === 'select'">
    <el-select v-model="compValue" :placeholder="params?.placeholder || '请选择'">
      <OptionComp :fetch-options="params?.options"/>
    </el-select>
  </template>
  <template v-else>
    <el-input v-model="compValue" :placeholder="params?.placeholder || '请输入'"></el-input>
  </template>
</template>

<script setup lang="ts">
import { PropType, ref, defineProps } from 'vue';
import { SearchItem } from '@/utils/searchParams';
import OptionComp from './OptionComp.vue';

const props = defineProps({
  params: {
    type: Object as PropType<SearchItem>,
  },
});
const compValue = ref('');
</script>

<style scoped>

</style>
