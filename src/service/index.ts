/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-22
 * @www.httpbin.org 测试网站
 */
import axios, { AxiosRequestConfig } from "axios"

// 拦截器
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log(config)

        return config
    },
    (err: AxiosRequestConfig) => {
        console.log(err)
        return err
    }
)

axios.get("http://httpbin.org/get").then((res) => {
    console.log(res)
})
// export default function(){

// }
