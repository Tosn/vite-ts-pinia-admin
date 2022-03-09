import { $post, $get } from '@/utils/request';

const MockPrefix = (import.meta.env.MODE === 'development') ? '/mock' : '';
export const loginIn = <T>(params: T) => $post('/api/login', params);

export const getUserInfo = () => $get(`${MockPrefix}/user`);
export const getTags = () => $get(`${MockPrefix}/tags`);
export default {

};
