/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-25
 */
import type { AxiosRequestConfig, AxiosResponse } from "axios"

// 自定义接口 用于扩展其他接口
interface IDSRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (err: any) => any
}
interface DSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 扩展：此接口既拥有 AxiosRequestConfig的所有功能，也拥有 IDSRequestInterceptors 的功能
  interceptor?: IDSRequestInterceptors<T>
  showLoading?: boolean
}

export { DSRequestConfig, IDSRequestInterceptors }
