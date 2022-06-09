<template>
  <div class="login-box">
    <div class="section-content">
      <h3>{{ systemName }}</h3>
      <div class="login-formbox m-t-20">
        <el-form :model="userInfo" ref="loginRef" :rules="rules" label-position="top">
          <el-form-item prop="email" label="Email">
            <el-input v-model="userInfo.email" placeholder="暂不支持，请使用飞书一键登录" disabled>
              <template #suffix>
                <span class="iconfont icon-email"></span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email" label="Password">
            <el-input v-model="userInfo.password" type="password" placeholder="暂不支持，请使用飞书一键登录" disabled>
              <template #suffix>
                <span class="iconfont icon-Password"></span>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="inset-button">
          <el-button type="text" disabled>Register</el-button>
          <el-button type="primary" @click="submitForm" disabled>Login In</el-button>
        </div>
        <div class="inset-quick-button m-t-20">
          <el-button type="primary" class="w-100" @click="loginWithFeishu">飞书一键登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { systemName } from '@/settings';
import { loginIn, checkLogin } from '@/api';
import { useRouter, useRoute } from 'vue-router';
import { setToken } from '@/utils/token';
import { useUserStore } from '@/store/modules/user';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
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

const loginWithFeishu = () => {
  const env = `${window.location.origin}/login`;
  const state = `webeye|6b588273-d1ba-4a54-a315-19ad6d6a0677|${env}`;
  window.location.href = `
    https://open.feishu.cn/connect/qrconnect/page/sso/?app_id=cli_9ed5d5bde42a900e&state=${state}&redirect_uri=http://lark.geezcomics.com/lark/lark_login
  `;
};

const checkIsLogin = async () => {
  const code:string = route.query.code as string;
  if (code) {
    // 这个是token
    setToken(code);
    checkLogin(code).then((res: any) => {
      router.push({
        path: '/',
      });
    });
  }
};
checkIsLogin();

</script>

<style scoped>

</style>
