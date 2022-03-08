import { $post, $get } from '@/utils/request'

export const loginIn = <T>(params: T) => $post('/api/login', params)

export const getUserInfo = () => $get('/api/user')

export default {

}