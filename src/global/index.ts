/*
 * @Author: dong shun
 * @LastEditTime: 2022-04-26
 */
import { App } from "vue"
import "element-plus/dist/index.css"
import {
  ElButton,
  ElInput,
  ElMessage,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon
} from "element-plus"
const components = [
  ElButton,
  ElInput,
  ElMessage,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon
]

// 方式一：
// export function registerEl(app: App):void {
//     for (const component of components) {
//         app.component(component.name, component)
//     }
// }

// 方式二：
export default {
  install(app: App): void {
    for (const component of components) {
      app.use(component)
    }
  }
}
