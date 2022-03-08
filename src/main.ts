import { createApp } from 'vue';
import { store } from '@/store';
import Router from '@/router';
import ElementPlus from 'element-plus';
import App from './App.vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import '@/styles/index.scss';

createApp(App)
  .use(Router)
  .use(store)
  .use(ElementPlus)
  .mount('#app');
