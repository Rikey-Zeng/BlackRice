<template>
  <div class="mine">
    <van-cell-group class="top">
      <van-image
        class="img"
        :src="results.avatar"
        round
        width="5rem"
        height="5rem"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>
      <span>{{ results.nickName }}</span>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="我的订单" is-link to="/order" />
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
        @click="address"
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
import { reqInfo } from "../../api/product";
import { removeToken } from "../../utils/auth";
export default {
  data() {
    return {
      show: false,
      results: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    fukuan() {
      this.show = true;
    },
    shouhuo() {
      this.show = true;
    },
    pingjia() {
      this.show = true;
    },
    tuikuan() {
      this.show = true;
    },
    //退出登录
    exit() {
      console.log("退出登录");
      localStorage.removeItem("token");
      removeToken("token");
      this.getreqinfo();
    },
    // 获取用户信息
    async getreqinfo() {
      console.log("获取用户信息");
      const result = await reqInfo();
      console.log("result", result);
      this.results = result;
    },
    address() {
      console.log("地址");
      this.$router.push("/address");
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
