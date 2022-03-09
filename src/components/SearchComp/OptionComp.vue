<template>
  <el-option
    v-for="op in options"
    :key="op[props.value]"
    :value="op[props.value]"
    :label="op[props.label]"
  >
    {{ op[props.label] }}
  </el-option>
</template>

<script setup lang="ts">
import {
  onMounted, Ref, ref, defineProps,
} from 'vue';

const options:Ref<any[]> = ref([]);

const props = defineProps({
  fetchOptions: {
    type: [Function, Array],
    default: () => [],
  },
  value: {
    type: String,
    default: 'value',
  },
  label: {
    type: String,
    default: 'label',
  },
});

const getOptions = async () => {
  if (typeof props.fetchOptions === 'function') {
    options.value = await props.fetchOptions();
  } else {
    options.value = props.fetchOptions;
  }
};
onMounted(() => {
  getOptions();
});
</script>

<style scoped>

</style>
