<template>
  <div class="user">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "@/store"

import { searchFormConfig } from "./config/searchConfig"
import { contentTableConfig } from "./config/contentConfig"
// import { modalConfig } from "./config/modal.config"

// import { usePageSearch } from "@/hooks/use-page-search"
// import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "users",
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  },
  components: {
    // PageSearch,
    // PageContent,
    // PageModal
  }
})
</script>

<style scoped></style>
