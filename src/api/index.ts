import { $post, $get } from '@/utils/request';

// const MockPrefix = (import.meta.env.MODE === 'development') ? '/mock' : '';
export const loginIn = <T>(data: T) => $post('/api/login', data);
export const checkLogin = (code: string) => $get('/api/lark_login', { code });
// 获取登录用户信息
export const getUserInfo = () => $get('/api/userinfo');

export default {

};
