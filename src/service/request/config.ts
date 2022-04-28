/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-28
 */

// 方式一：（大多数配置不同环境的方法）
// 配置在不同环境下切换不同的接口(开发环境、生产环境、测试环境)
// 根据 process.env.NODE_ENV 区分 webpack 提供

// 方式二：创建 .env.development文件  是Vue CLI 提供的(环境变量),会注入到 process.env 里面

let BASE_URL = ""
const TIMEOUT = 10000

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://152.136.185.210:5000"
  // console.log("开发环境")
} else if (process.env.NODE_ENV === "production") {
  // console.log("生产环境")
  BASE_URL = "http"
} else if (process.env.NODE_ENV === "test") {
  // console.log("测试环境")
  BASE_URL = "http"
}

export { BASE_URL, TIMEOUT }
