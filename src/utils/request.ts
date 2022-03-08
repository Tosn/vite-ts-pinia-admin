import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { ElMessage } from 'element-plus';
import { fnDelay } from '@/utils/public';

// interface AxiosResponseSelf<AxiosResponseType> extends AxiosResponse<AxiosResponseType>

const axiosInstance: AxiosInstance = axios.create({
  baseURL: <string>import.meta.env.VITE_BASE_API,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => config, (error: any) => Promise.reject(error));

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<AxiosResponseType>) => response,
  (error: any) => {
    const errorCode: number = error.response.status;
    if (errorCode === 401) {
      ElMessage.error('请先登录');
      window.location.href = '/login';
      return false;
    } if (error.message.indexOf('timeout') !== -1) {
      ElMessage.error('网络超时');
    } else if (error.message === 'Network Error') {
      ElMessage.error('网络连接错误');
    } else if (error.response.data) ElMessage.error(error.response.statusText);
    else ElMessage.error('接口路径找不到');
    return Promise.reject(error);
  },
);

const defaultParams = {}; // 默认参数

const $post = <T>(url: string, params?: T): any => new Promise((resolve, reject) => {
  axiosInstance.post(url, { ...params, ...defaultParams }).then((res: AxiosResponse<AxiosResponseType>) => {
    if (res && res.data.code === 0) {
      resolve(res.data.data);
    } else if (res) {
      ElMessage.error((res && res.data?.msg) || 'network error');
      // 处理错误
    }
  }).catch((error) => {
    reject(error);
  });
});

const $get = <T>(url: string, params?: T): any => new Promise((resolve, reject) => {
  const getParams = {
    ...params,
    ...defaultParams,
  };
  axiosInstance.get(url, { params: getParams }).then((res: AxiosResponse<AxiosResponseType>) => {
    if (res && res.data.code === 0) {
      resolve(res.data.data);
    } else if (res) {
      ElMessage.error((res && res.data?.msg) || 'network error');
      // 错误处理
    }
  }).catch((err) => {
    reject(err);
  });
});

export {
  $post,
  $get,
};
