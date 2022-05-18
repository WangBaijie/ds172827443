import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import LocalCache from "@/util/cache"
import { firstMenu } from "@/util/mapRoute"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/Login/Login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
    // children: [] -> 根据userMenus来决定 -> children
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== "/Login") {
    const token = LocalCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  if (to.path === "/main") {
    return firstMenu.url
  }
})
export default router
