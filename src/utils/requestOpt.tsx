import { getToken } from '@/utils/token';
import { RequestOptionsInit } from 'umi-request';

export const requestOpt = (url: string, options: RequestOptionsInit): object => {
  if (process.env.NODE_ENV === 'development') {
    console.log('url==>', url);
    if (options.data) {
      console.log('options.data==>', JSON.stringify(options.data));
    } else if (options.params && Object.keys(options.params).length > 0) {
      console.log('options.params==>', options.params);
    }
  }
  const headers = {
    Authorization: 'Basic ' + btoa(getToken() + ':' + ''),
  };

  return {
    url: url,
    options: { ...options, headers },
  };
};
