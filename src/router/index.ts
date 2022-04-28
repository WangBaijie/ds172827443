import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Login from "@/views/Login/Login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: Login
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Login/Login.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
