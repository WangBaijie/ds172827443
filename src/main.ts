import { createApp } from "vue"
import router from "./router"
import store from "./store"
import registerEl from "./global/index" // 注册element组件
import "./service/index"
import "./service/request/config"
import App from "./App.vue"

const app = createApp(App)

app.use(store)
app.use(registerEl)
app.use(router)
app.mount("#app")

console.log(process.env.VUE_APP_DIY_URL)
