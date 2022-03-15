<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <div class="center" @click="zhuce()">没有账号？注册账号</div>
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";
import { Notify } from "vant";
import { setToken } from "../../utils/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqLogin(values);
      console.log(result);
      if (result.code == "success") {
        Notify({ type: "primary", message: "登陆成功" });
        // message.success("登陆成功");
        setToken(result.token);
        this.$store.commit("changeToken", result.token);
        // // vuex持久化
        localStorage.setItem("token", result.token);
        this.$router.push("/home");
      }
    },
    zhuce() {
      this.$router.push("/reg");
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style>
.center {
  color: grey;
  width: 150px;
  margin: 0 auto;
}
</style>