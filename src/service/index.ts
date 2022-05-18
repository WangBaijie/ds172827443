/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-17
 *  统一出口
 */
import DSRequest from "./request"
import { BASE_URL, TIMEOUT } from "./request/config"
import LocalCache from "@/util/cache"
// 一个实例

const DsRequest = new DSRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptor: {
    requestInterceptor: (config) => {
      const token = LocalCache.getCache("token")
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    }
  }
})
export default DsRequest

/**
 * 这个实例与上面的互不影响
 * const DsRequest2 = new DSRequest({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    interceptor: {
        requestInterceptor: (config) => {
            console.log("请求成功的拦截")
            return config
        }
    }
    })
 */
