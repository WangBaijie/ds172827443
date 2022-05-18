const path = require("path")

// vue cli 的配置属性和webpack里的属性有些区别
module.exports = {
  outputDir: "./build",
  // publicPath: "./", // 更改本地打包后的资源路径
  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:4000",
        changOrigin: true,
        ws: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
