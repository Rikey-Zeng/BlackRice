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
    <p>系统会根据您选择的国家/地区的法律法规存储您的</p>
    <p>个人信息</p>
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

    <input type="text" placeholder="请输入手机号码" class="inp" />
    <span class="spd">+86＞</span>
    <input type="text" placeholder="请输入短信验证码" class="inp2" />
    <span class="yan" @click.stop="verification">获取验证码</span>
    <input type="checkbox" class="inp1" /><span
      >已阅读并同意小米账号<a href="" class="a1">用户协议</a>和<a
        href=""
        class="a1"
        >隐私政策</a
      ></span
    >
    <van-button round type="info" @click="next">下一步</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import Vue from "vue";
import { Area } from "vant";
import router from "@/router";

Vue.use(Area);
export default {
  data() {
    return {
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
    verification() {
      var reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      var oInput = document.querySelectorAll("input");
      console.log(oInput);
      var val2 = oInput[1].value;
      console.log(val2);
      if (reg2.test(val2)) {
        var arr = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
        function yzm(arr) {
          var arr1 = "";
          console.log(arr1);
          for (var i = 0; i < 6; i++) {
            var a = parseInt(Math.random() * 61);
            arr1 += arr[a];
          }
          Toast(arr1);
        }
        yzm(arr);
      } else {
        Toast("请输入正确格式的手机号码");
      }
    },
    next() {
      var oInput = document.querySelectorAll("input");
      if (oInput[2].value ?? "" !== "") {
        this.$router.push("./set");
      } else {
        Toast("请勾选协议");
      }
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
h1 {
  font-size: 30px;
  margin: 20px 0 0 20px;
  font-weight: 800;
}
p {
  display: block;
  font-size: 15px;
  width: 340px;
  margin: 15px 0 0 20px;
  color: #0b84ff;
}
.a1 {
  color: #0b84ff;
}
</style>