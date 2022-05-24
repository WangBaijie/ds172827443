<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ leftHeaderTitle || "" }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <el-table
      :data="tableData"
      stripe
      border
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>

      <template v-for="propItem in propsList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[5, 10, 20]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "DsTable",
  props: {
    tableData: {
      type: Array,
      require: true
    },
    propsList: {
      type: Array,
      require: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    leftHeaderTitle: {
      type: String,
      default: ""
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["selectionChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value)
    }

    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }

    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }

    return {
      handleSelectionChange,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>
<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 10px 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
  .footer {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    .el-pagination {
      text-align: right;
    }
  }
}
</style>
