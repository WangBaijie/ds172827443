import { createApp } from "vue"
import router from "./router"
import store from "./store"
import App from "./App.vue"
import { registerEl } from "./global/index" // 注册element组件
import "normalize.css" // 清除默认标签的第三方库
import "./assets/css/base.css"
import { setupStore } from "./store"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(registerEl)
app.use(store)
setupStore()

// 如果注册动态路由 需要在路由匹配前先注册，否则刷新时会找不到
app.use(router)
app.mount("#app")
