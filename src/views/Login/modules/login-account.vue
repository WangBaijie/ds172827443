<template>
  <div class="login-account">
    <el-form :model="account" :rules="FormRules" ref="FormRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import { ElForm } from "element-plus"
import Cache from "@/util/cache"

export default defineComponent({
  name: "login-account",
  setup() {
    const store = useStore()
    const account = reactive({
      username: Cache.getCache("username") || "",
      password: Cache.getCache("password") || ""
    })
    const FormRules = {
      username: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur"
        },
        {
          max: 8,
          message: "请输入3-8位的账户"
        }
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur"
        },
        {
          min: 3,
          message: "密码长度不得少于3位"
        }
      ]
    }

    const FormRef = ref<InstanceType<typeof ElForm>>()

    const LoginAccount = () => {
      FormRef.value?.validate((valid) => {
        if (valid) {
          Cache.setCache("username", account.username)
          Cache.setCache("password", account.password)
          store.dispatch("LoginModule/accountLoginAction", { ...account })
        }
      })
    }
    return {
      account,
      FormRules,
      LoginAccount,
      FormRef
    }
  }
})
/**
 * 二江寺（锦城大道） - 犀浦站 1小时11分钟
 * 犀浦站 - 都江堰站
 */
</script>
