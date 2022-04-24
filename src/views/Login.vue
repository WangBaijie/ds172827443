<template>
    <div class="Login">
        <h2>Login</h2>
        <h2>{{ $store.state.name }}</h2>
        <el-button type="primary">哈哈哈</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "Login",
    components: {}
})
</script>
