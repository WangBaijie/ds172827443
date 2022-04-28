const path = require("path")

// vue cli 的配置属性和webpack里的属性有些区别
module.exports = {
  outputDir: "./build",
  publicPath: "./", // 更改本地打包后的资源路径
  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000",
        changOrigin: true,
        ws: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"))
  }
}
