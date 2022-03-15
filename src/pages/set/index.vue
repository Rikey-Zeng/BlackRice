<template>
  <div class="set">
    <van-uploader :after-read="afterRead" />
    <img v-if="imgurl" :src="imgurl" alt="" />
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
  </div>
</template>

<script>
import { reqRegister } from "../../api/user";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      imgurl: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqRegister({ ...values, avatar: this.imgurl });
      console.log(111, result);
      if (result.code == "success") {
        localStorage.setItem("avator", this.imgurl);
        Toast("注册成功");
        this.$router.push("/login");
      } else {
        Toast("用户名已存在，请重新注册");
      }
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgurl = file.content;
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
img {
  width: 220px;
  height: 220px;
}
</style>