<template>
  <div class="nav-header">
    <el-icon v-if="isFold" @click="handleFoldClick"><Expand /></el-icon>
    <el-icon v-else @click="handleFoldClick"><Fold /></el-icon>
    <div class="content">
      <ds-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import UserInfo from "./user-info.vue"
import DsBreadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb"

import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { pathMapBreadcrumbs } from "@/util/mapRoute"

export default defineComponent({
  components: {
    UserInfo,
    DsBreadcrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    // 面包屑的数据: [{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.LoginModule.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
