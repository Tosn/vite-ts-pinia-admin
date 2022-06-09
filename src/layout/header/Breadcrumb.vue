<template>
  <div class="header-bread">
    <div class="bread-text">
      <i @click="menuStore.toggleMenu" :class="`font-20 m-r-10 iconfont ${menuStore.isCollapse ? 'icon-zhankaicaidan' : 'icon-shouqicaidan'}`"></i>
      <el-breadcrumb>
        <el-breadcrumb-item :to="item.path" v-for="item in breadList" :key="item.name">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bread-info">
      <i class="iconfont icon-quanping m-r-10 pointer" @click="onScreenfullClick"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span class="avatar"><img :src="userInfo.avatar" :alt="userInfo.name"></span>
          {{ userInfo.name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="userStore.loginOut">Login Out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue';
import { ref, watch, Ref } from 'vue';
import { useRoute } from 'vue-router';
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/store/modules/user';
import { useMenuStore } from '../../store/modules/menu';

const userStore = useUserStore();
const { userInfo } = userStore;

const route = useRoute();
const menuStore = useMenuStore();
const breadList:Ref<any[]> = ref([]);

const getBreadList = () => {
  breadList.value = route.matched.map((r) => (
    { path: r.path, name: r.meta.name }
  ));
};
getBreadList();

watch(route, () => {
  getBreadList();
});

// 全屏点击时
const onScreenfullClick = () => {
  if (!screenfull.isEnabled) {
    ElMessage.warning('暂不不支持全屏');
    return;
  }
  screenfull.toggle();
};
</script>

<style scoped lang="scss">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 2px;
  .avatar {
    margin-right: 6px;
  }
}
</style>
