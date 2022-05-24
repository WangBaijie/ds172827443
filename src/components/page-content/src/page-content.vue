<template>
  <div class="PageContent">
    <ds-table
      :tableData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick">新建用户</el-button>
      </template>

      <!-- 2.列中的常用插槽,在传入的配置中传入对应的插槽名 -->
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          @click="isEnable"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $globalFN.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $globalFN.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handleBtns">
          <el-button
            v-if="isUpdate"
            type="primary"
            @click="handleEditClick(scope.row)"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <el-button
            v-if="isDelete"
            type="danger"
            @click="handleDeleteClick(scope.row)"
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </ds-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue"
import { useStore } from "vuex"
import { usePermission } from "@/hooks/use-permission"
export default defineComponent({
  name: "PageContent",
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore()

    // 0.获取操作的权限
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")

    // 1.双向绑定pageInfo(页码切换时触发执行接口)
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch("systemModule/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3.从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`systemModule/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`systemModule/pageListCount`](props.pageName)
    )

    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propsList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )

    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch("systemModule/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit("newBtnClick")
    }
    const handleEditClick = (item: any) => {
      console.log(item)
      emit("editBtnClick", item)
    }

    // 5.个人扩展启用禁用按钮
    const isEnable = () => {
      console.log("isEnable-启用禁用按钮")
    }

    return {
      dataList,
      getPageData,
      dataCount,
      otherPropSlots,
      pageInfo,
      isCreate,
      isUpdate,
      isDelete,
      isEnable,
      handleNewClick,
      handleEditClick,
      handleDeleteClick
    }
  }
})
</script>
<style scoped>
.PageContent {
  padding: 10px 40px 40px 40px;
  border-top: 20px solid #f0f2f5;
}
</style>
