import { createApp } from "vue"
import router from "./router"
import store from "./store"
import App from "./App.vue"
import registerEl from "./global/index" // 注册element组件
import "normalize.css" // 清除默认标签的第三方库
import "./assets/css/base.css"

const app = createApp(App)

app.use(store)
app.use(registerEl)
app.use(router)
app.mount("#app")
