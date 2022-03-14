<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-empty
      class="custom-image"
      image="https://cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/no_result/no_result_cart3.png"
      description="目前没有添加商品哦~"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/home");
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style>
.custom-image .van-empty__image {
  width: 86px;
  height: 86px;
}
</style>
