<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-empty
      class="custom-image"
      image="https://cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/no_result/no_result_cart3.png"
      description="目前没有添加商品哦~"
    />
    <span class="text" @click="tohome">去首页逛逛 </span>
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="tuijian">为你推荐</div>
      <div
        class="addcart"
        v-for="item in products"
        :key="item._id + Math.random()"
        @click="godetail(item._id)"
      >
        <img :src="item.coverImg" alt="" />
        <div class="product_r">
          <p>{{ item.name }}</p>
          <p>{{ item.price }}元</p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { reqProducts } from "../../api/product";
export default {
  data() {
    return {
      list: [],
      products: [],
      banners: [],
      loading: false, //加载
      finished: false,
      page: 1,
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/home");
      Toast("返回");
    },
    tohome() {
      this.$router.push("/home");
    },
    async getProducts() {
      this.loading = true;
      const result = await reqProducts({ page: this.page });
      this.loading = false;
      this.products = [...this.products, ...result.products];
      if (result.products.length < 10) {
        this.finished = true;
      } else {
        this.page++;
      }
    },
    onLoad() {
      this.getProducts();
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style>
body {
  background-color: rgb(244, 244, 244);
}
.tuijian {
  font-size: 16px;
  color: rgb(35, 34, 34);
  font-weight: 800;
  margin-top: 70px;
  margin-left: 42%;
  margin-bottom: 20px;
}
.text {
  display: block;
  border: 1px gray solid;
  width: 101px;
  height: 37px;

  text-align: center;
  line-height: 37px;
  font-size: 14px;
  color: rgb(102, 102, 102);
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
.van-swipe-item,
.van-swipe-item img,
.my-swipe {
  height: 400px;
}
.van-swipe-item img {
  width: 100%;
}
.addcart {
  margin-left: 7px;
  width: 47%;
  height: 257px;
  background-color: white;
  border-radius: 15px;
  margin-top: 10px;
  float: left;
}
.addcart img {
  width: 178px;
  height: 178px;
  border-radius: 10px 10px 0px 0px;
}
.addcart p {
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
}
.van-list {
  padding-bottom: 40px;
}
</style>
