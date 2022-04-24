/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-22
 */

// 方式一：（大多数配置不同环境的方法）
// 配置在不同环境下切换不同的接口(开发环境、生产环境、测试环境)
// 根据 process.env.NODE_ENV 区分 webpack 提供

let BASE_URL = ""
let BASE_name = ""

if (process.env.NODE_ENV === "development") {
    console.log("开发环境")

    BASE_URL = "http"
    BASE_name = "http"
} else if (process.env.NODE_ENV === "production") {
    console.log("生产环境")
    BASE_URL = "http"
    BASE_name = "http"
} else if (process.env.NODE_ENV === "test") {
    console.log("测试环境")
    BASE_URL = "http"
    BASE_name = "http"
}

export { BASE_URL, BASE_name }

// 方式二：创建 .env.development文件  是Vue CLI 提供的(环境变量),会注入到 process.env 里面
