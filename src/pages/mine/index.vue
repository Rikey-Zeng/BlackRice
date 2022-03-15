<template>
  <div class="mine">
    <van-cell-group class="top">
      <van-image
        class="img"
        round
        width="5rem"
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <span>用户名</span>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="我的订单" is-link to="/" />
    </van-cell-group>

    <van-row class="ico">
      <van-col @click="fukuan" span="6">
        <van-icon size="2.5rem" color="#e0b374" name="card" />
        <p>待付款</p>
      </van-col>
      <van-col @click="shouhuo" span="6"
        ><van-icon size="2.5rem" color="#e0b374" name="shopping-cart" />
        <p>待收货</p>
      </van-col>
      <van-col @click="pingjia" span="6">
        <van-icon size="2.5rem" color="#e0b374" name="comment" />
        <p>评价</p>
      </van-col>
      <van-col @click="tuikuan" span="6">
        <van-icon size="2.5rem" color="#e0b374" name="gold-coin" />
        <p>退款/售后</p>
      </van-col>
    </van-row>
    <van-cell-group class="butto">
      <van-cell
        class="nam"
        color="#e0b374"
        title="我的资产"
        is-link
        icon="gem"
        @click="shouhuo"
      />
      <van-cell
        class="nam"
        color="#e0b374"
        title="优惠券"
        is-link
        icon="coupon"
        @click="shouhuo"
      />
      <van-cell
        class="nam"
        color="#e0b374"
        title="我的收藏"
        is-link
        icon="star"
        @click="shouhuo"
      />
      <van-cell
        class="nam"
        color="#e0b374"
        title="地址管理"
        is-link
        icon="location"
      />
      <van-cell
        class="nam"
        color="#e0b374"
        title="资质证照"
        is-link
        icon="manager"
        @click="shouhuo"
      />
      <van-cell
        class="nam"
        color="#e0b374"
        title="协议规则"
        is-link
        icon="award"
        @click="shouhuo"
      />
      <van-cell
        class="nam"
        color="#e0b374"
        title="帮助与反馈"
        is-link
        icon="font"
        @click="shouhuo"
      />
    </van-cell-group>
    <van-button class="btn" @click="exit" type="default">退出登录</van-button>
    <van-popup position="top" v-model="show" :style="{ textAlign: 'center' }"
      >暂无此功能</van-popup
    >
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
import { Col, Row } from "vant";
import { Popup } from "vant";
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    fukuan() {
      this.$router.push("/");
    },
    shouhuo() {
      // this.$router.push("/");
      this.show = true;
      console.log(111);
    },
    pingjia() {
      // this.$router.push("/");
      this.show = true;
    },
    tuikuan() {
      // this.$router.push("/");
      this.show = true;
    },
    //退出登录
    exit() {
      console.log("退出登录");
      localStorage.removeItem("token");
      removeToken("token");
    },
    // 获取用户信息
    async getreqinfo() {
      console.log("获取用户信息");
      // const result = await reqInfo();
      // console.log(result);
      // this.results = result;
    },
  },
  created() {
    this.getreqinfo();
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
body {
  font-size: 16px;
  background-color: #f3f3f3;
  height: 100%;
}
.ico {
  text-align: center;
  font-size: 14px;
}
.top {
  color: #fff;
  background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/ucenter/ucenter_bg_top.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 115px;
  position: relative;
}
.top span {
  position: absolute;
  top: 50px;
}
.top .img {
  margin: 23px;
}
.butto .nam {
  margin-top: 2px;
}
.btn {
  /* position: absolute; */
  /* margin: 0 auto; */
  left: calc(50% - 44px);
}
</style>
