<template>
  <div class="login-box">
    <div class="section-content">
      <h3>{{ systemName }}</h3>
      <div class="login-formbox m-t-20">
        <el-form :model="userInfo" ref="loginRef" :rules="rules" label-position="top">
          <el-form-item prop="email" label="Email">
            <el-input v-model="userInfo.email" placeholder="email">
              <template #suffix>
                <span class="iconfont icon-email"></span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email" label="Password">
            <el-input v-model="userInfo.password" type="password" placeholder="password">
              <template #suffix>
                <span class="iconfont icon-Password"></span>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="inset-button">
          <el-button type="text">Register</el-button>
          <el-button type="primary" @click="submitForm">Login In</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { systemName } from '@/settings';
import { loginIn } from '@/api';
import { useRouter } from 'vue-router';

const router = useRouter();
const rules = reactive({
  email: [
    { required: true, message: 'Please input email' },
  ],
  password: [
    { required: true, message: 'Please input password' },
  ],
});

const userInfo = reactive({
  email: '',
  password: '',
});

const submitForm = () => {
  loginIn(userInfo);
  router.push({
    path: '/',
  });
};

</script>

<style scoped>

</style>
