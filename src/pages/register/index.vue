<template>
  <div class="register">
    <span class="title" @click="onClicktitle"></span>
    <span class="title1" @click="onClicktitle1"></span>
    <van-nav-bar
      left-text="返回首页"
      right-text="需要帮助"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <h1>注册小米账号</h1>
    <p class="p">系统会根据您选择的国家/地区的法律法规存储您的</p>
    <p class="p">个人信息</p>
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>

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
    <div class="center" @click="denglu()">已有账号？点击登录</div>

    <input type="checkbox" class="inp1" /><span
      >已阅读并同意小米账号<a href="" class="a1">用户协议</a>和<a
        href=""
        class="a1"
        >隐私政策</a
      ></span
    >
  </div>
</template>

<script>
import { Toast } from "vant";
import { reqRegister } from "../../api/user";

import Vue from "vue";
import { Area } from "vant";

Vue.use(Area);
export default {
  data() {
    return {
      username: "",
      password: "",
      imgurl: "",
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      Toast("返回");
      this.$router.push("/home");
    },
    onClickRight() {
      //   Toast("按钮");
      this.$router.push("/police");
    },
    onClicktitle() {
      Toast("切换语言");
    },
    onClicktitle1() {
      this.$router.push("/help");
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
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
    denglu() {
      this.$router.push("/login");
    },
  },

  created() {},
  mounted() {},
  components: {},
};
</script>
<style >
.center {
  color: grey;
  width: 150px;
  margin: 0 auto;
}
h1 {
  font-size: 30px;
  margin: 20px 0 0 20px;
  font-weight: 800;
}
.p {
  display: block;
  font-size: 15px;
  width: 340px;
  margin: 15px 0 0 20px;
  color: #0b84ff;
}
.a1 {
  color: #0b84ff;
}
img {
  width: 220px;
  height: 220px;
}
</style>