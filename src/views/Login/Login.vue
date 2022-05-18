<template>
  <div class="Login">
    <div class="login-account">
      <div class="login-weaper animated bounceInDown">
        <div class="login-left">
          <div class="login-time">
            {{ NowTime }}
            {{ getNowTime() }}
          </div>
          <img class="img" src="@/assets/img/logo.png" alt="" />
          <p class="title">后台管理系统</p>
        </div>
        <div class="login-border">
          <div class="login-main">
            <LoginAccount ref="LoginAccountRef" />
            <el-button size="small" class="login-submit" @click="handleLogin"
              >登录</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./modules/login-account.vue"
import { dateFormat } from "@/util/date"

export default defineComponent({
  name: "Login",
  setup() {
    let NowTime = ref("2022-04-27 11:30:46")
    const getNowTime = () => {
      setInterval(() => {
        NowTime.value = dateFormat(new Date())
      }, 1000)
    }
    //  <InstanceType<typeof LoginAccount>> 拿到组件实例的类型  TS语法
    const LoginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLogin = () => {
      LoginAccountRef.value?.LoginAccount()
    }

    return {
      NowTime,
      getNowTime,
      handleLogin,
      LoginAccountRef
    }
  },
  components: {
    LoginAccount
  }
})
</script>

<style scoped lang="less">
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url("http://www.17sucai.com/preview/242158/2015-01-10/%E7%99%BB%E5%BD%95/images/cloud.jpg")
    0 bottom repeat-x #049ec4;
  animation: animate-cloud 20s linear infinite;
}
.custom-tabs-label .el-icon {
  vertical-align: middle;
}
.custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.login-weaper {
  margin: 0 auto;
  width: 1000px;
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
  .el-input-group__append {
    border: none;
  }
}

.login-left,
.login-border {
  position: relative;
  min-height: 500px;
  align-items: center;
  display: flex;
}
.login-left {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  flex-direction: column;
  background-color: #409eff;
  color: #fff;
  float: left;
  width: 50%;
  position: relative;
}
.login-left .img {
  width: 140px;
}
.login-time {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 100%;
  color: #fff;
  font-weight: 200;
  opacity: 0.9;
  font-size: 18px;
  overflow: hidden;
}
.login-left .title {
  margin-top: 60px;
  text-align: center;
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 25px;
}

.login-border {
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  background-color: #fff;
  width: 50%;
  float: left;
  box-sizing: border-box;
}
.login-main {
  margin: 0 auto;
  width: 65%;
  box-sizing: border-box;
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-title {
  color: #333;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  letter-spacing: 4px;
}
.login-menu {
  margin-top: 40px;
  width: 100%;
  text-align: center;
  a {
    color: #999;
    font-size: 12px;
    margin: 0px 8px;
  }
}
.login-submit {
  width: 100%;
  height: 45px;
  border: 1px solid #409eff;
  background: none;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 300;
  color: #409eff;
  cursor: pointer;
  margin-top: 30px;
  font-family: "neo";
  transition: 0.25s;
}
.login-form {
  margin: 10px 0;
  i {
    color: #333;
  }
  .el-form-item__content {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .el-input {
    input {
      padding-bottom: 10px;
      text-indent: 5px;
      background: transparent;
      border: none;
      border-radius: 0;
      color: #333;
      border-bottom: 1px solid rgb(235, 237, 242);
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
}
.login-code {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 0 10px;
}
.login-code-img {
  margin-top: 2px;
  width: 100px;
  height: 38px;
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 38px;
  text-indent: 5px;
  text-align: center;
  cursor: pointer !important;
}
</style>
