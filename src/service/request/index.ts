/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-17
 *  封装效果：
 *  1、不同实例有属于自己的独立拦截器
 *  2、同个实例有单独接口配置的独立拦截器
 */
import axios from "axios"
import type { AxiosInstance } from "axios"
import type { DSRequestConfig, IDSRequestInterceptors } from "./type"

class DSRequest {
  // 创建Axios实例
  instance: AxiosInstance
  interceptor?: IDSRequestInterceptors
  showLoading?: DSRequestConfig

  constructor(config: DSRequestConfig) {
    // 一、调用 constructor 时都会创建新的实例对象，即使是两个不同的baseUrl也互不影响
    this.instance = axios.create(config)
    this.interceptor = config.interceptor // 保存传进来的拦截器

    // 二、从config中取出的拦截器是对应实例的拦截器(接收两个函数resolve,rejected)
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )
    // 三、全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("APP全局请求拦截器")
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("APP全局响应拦截器")
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  // 接收传入的参数 url / data / method,并将结果返回出去
  request<T>(config: DSRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: DSRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: DSRequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: DSRequestConfig<T>) {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  put<T>(config: DSRequestConfig<T>) {
    return this.request<T>({ ...config, method: "PUT" })
  }

  patch<T>(config: DSRequestConfig<T>) {
    return this.request<T>({ ...config, method: "patch" })
  }
}

export default DSRequest
