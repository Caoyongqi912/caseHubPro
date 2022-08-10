import { extend } from 'umi-request';
import { requestOpt } from '@/utils/requestOpt';

/** 配置request请求时的默认参数 */
const request = extend({
  // errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return requestOpt(url, options);
});

request.interceptors.response.use(async (response) => {
  // if (data.code !== 200) {
  //   message.error(data.msg);
  //   if (data.code === 300) {
  //     reLogin()
  //   }
  //   return data.msg
  // } else {
  //   return response;
  // }
  return response;
});

export default request;
