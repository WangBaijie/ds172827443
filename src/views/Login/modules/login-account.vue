<template>
  <div class="login-account">
    <el-form :model="account" :rules="FormRules" ref="FormRef">
      <el-form-item label="账号" prop="name">
        <!-- <el-input v-model="account.name" placeholder="请输入账号" /> -->
        <el-input v-model="account.name" placeholder=""></el-input>
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
      name: Cache.getCache("name") || "",
      password: Cache.getCache("password") || ""
    })
    const FormRules = {
      name: [
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
          Cache.setCache("name", account.name)
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
</script>
