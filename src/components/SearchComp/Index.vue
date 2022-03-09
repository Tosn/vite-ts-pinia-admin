<template>
  <el-form :model="searchData" label-position="top" ref="formRef">
    <el-row :gutter="gutter">
      <el-col v-for="item in params" :key="item.label" :span="span">
        <el-form-item :label="item.label" :rules="item?.rules" :prop="item.key">
          <SearchItemComp :params="item" v-model="searchData[item.key]"></SearchItemComp>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
/**
 * $emits
 * @change 数据变动触发事件
 * @init 初始事件
 *
 * $props
 * default-data 默认值
 * params 渲染用的list
 * gutter 间距
 * span 栅格化
 *
 * $expose
 * checkForm 表单校验
 */
import {
  reactive, PropType, watch, ref, defineProps, defineExpose, defineEmits,
} from 'vue';
import { SearchItem } from '@/utils/searchParams';
import type { ElForm } from 'element-plus';
import SearchItemComp from './SearchItemComp.vue';

type FormInstance = InstanceType<typeof ElForm>
const props = defineProps({
  params: {
    type: Array as PropType<SearchItem[]>,
    default: () => [],
  },
  gutter: {
    type: Number,
    default: 30,
  },
  span: {
    type: Number,
    default: 6,
  },
  defaultData: {
    type: Object as PropType<ObjAny>,
    default: () => {},
  },
});
// 定义一个对象数据模型，用来接手传入的数据
const searchData:ObjAny = reactive({
});

const setReactiveData = () => {
  props.params.forEach((item: SearchItem) => {
    searchData[item.key] = '';
  });
};
setReactiveData();

const $emits = defineEmits(['change', 'init']);
// 初始化 给父组件 对应的参数和值，防止 默认进入的时候 需要这些参数 去请求对应的值
$emits('init', searchData);

let timeoutInter: any;
const delayUpLoad = () => {
  clearTimeout(timeoutInter);
  timeoutInter = setTimeout(() => {
    $emits('change', searchData);
  }, 500);
};

watch(searchData, () => {
  delayUpLoad();
});

const setDefaultValue = () => {
  Object.keys(props.defaultData).forEach((key) => {
    searchData[key] = props.defaultData[key];
  });
  // for (let key in props.defaultData) {
  //   searchData[key] = props.defaultData[key]
  // }
};

setDefaultValue();

watch(props.defaultData, () => {
  setDefaultValue();
});

// 默认值赋值

// 校验
const formRef = ref<FormInstance>();
const checkForm = () => new Promise((resolve) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      resolve(searchData);
    }
  });
});
defineExpose({
  checkForm,
});
</script>

<style scoped>

</style>
