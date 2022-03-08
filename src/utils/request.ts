import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { ElMessage } from 'element-plus';

// interface AxiosResponseSelf<AxiosResponseType> extends AxiosResponse<AxiosResponseType>

const axiosInstance: AxiosInstance = axios.create({
  baseURL: <string>import.meta.env.VITE_BASE_API,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => config, (error: any) => Promise.reject(error));

axiosInstance.interceptors.response.use((response: AxiosResponse<AxiosResponseType>) => response, (error: any) => Promise.reject(error));

const defaultParams = {}; // 默认参数

const $post = <T>(url: string, params?: T): any => new Promise((resolve, reject) => {
  axiosInstance.post(url, { ...params, ...defaultParams }).then((res: AxiosResponse<AxiosResponseType>) => {
    if (res.data.code === 0) {
      resolve(res.data.data);
    } else {
      ElMessage({
        type: 'error',
        message: res.data?.msg || 'network error',
      });
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
    if (res.data.code === 0) {
      resolve(res.data.data);
    } else {
      ElMessage({
        type: 'error',
        message: res.data?.msg || 'network error',
      });
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