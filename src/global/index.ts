/*
 * @Author: dong shun
 * @LastEditTime: 2022-05-24
 */
import { App } from "vue"
import "element-plus/dist/index.css"
import DsTable from "@/base-ui/table"
import PageContent from "@/components/page-content"
import PageSearch from "@/components/page-search"
import PageModal from "@/components/page-modal"
import DsForm from "@/base-ui/form"

import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElCol,
  ElSelect,
  ElSubMenu,
  ElTabPane,
  ElTabs,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog
} from "element-plus"

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,

  // 自定义全局组件
  DsTable,
  PageContent,
  PageSearch,
  PageModal,
  DsForm
]

// 方式一：
export function registerEl(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
// 方式二：
// export default {
//   install(app: App): void {
//     for (const component of components) {
//       app.use(component)
//     }
//   }
// }
