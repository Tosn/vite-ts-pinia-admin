<template>
{{ searchData }}
  <SearchComp :params="goodsParams" @change="getParams" @init="getParams" ref="SearchRef" :default-data="reactive({url: 'xxx:xx'})"></SearchComp>
  <button @click="submit">submit</button>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import SearchComp from '@/components/SearchComp/Index.vue';
import { goodsParams } from '@/utils/searchParams';

const searchData: ObjAny = reactive({});
const getParams = (params: ObjAny) => {
  Object.keys(params).forEach((key) => {
    searchData[key] = params[key];
  });
};
const SearchRef = ref();
const submit = () => {
  SearchRef.value.checkForm().then((res: any) => {
    console.log(res);
  });
};
</script>

<style scoped>

</style>
