<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="good-list" v-if="lists.length > 0">
      <!-- 购物车商品列表 -->
      <div class="goods" v-for="(item, index) in lists" :key="item._id + index">
        <van-swipe-cell>
          <!-- 单选 -->
          <van-checkbox v-model="item.checked" class="a"></van-checkbox>
          <!-- 图片 -->
          <img class="goods-img" :src="item.product.coverImg" alt="" />
          <!-- 商品信息 -->
          <div class="goods-info">
            <p class="pad">{{ item.product.name }}</p>
            <p class="pad">{{ item.product.price }}元</p>
            <div class="numcart">
              <van-icon name="plus" @click="updataPro(item.product._id, 1)" />
              <input
                type="text"
                :value="item.quantity"
                class="numvue"
              /><van-icon
                name="minus"
                @click="item.quantity > 1 && updataPro(item.product._id, -1)"
              />
            </div>
            <!-- <button>+</button -->

            <!-- 商品数量大于1 才会执行 -->

            <!--  -->
          </div>
          <template #right>
            <van-button
              square
              type="danger"
              text="删除"
              class="delete-button"
              @click="del(item._id)"
            />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <div v-else>
      <van-empty
        class="custom-image"
        image="https://cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/no_result/no_result_cart3.png"
        description="目前没有添加商品哦~"
      />
    </div>
    <van-submit-bar
      :price="sumPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <!-- 全选 -->
      <van-checkbox v-model="checked" shape="square">全选 </van-checkbox>
    </van-submit-bar>

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
import { Dialog } from "vant";
import { reqProducts } from "../../api/product";
import { reqCartListAPI, reqDelcartAPI, addToCart } from "../../api/cart";
import { reqSaveOrderAPI } from "../../api/order";
export default {
  data() {
    return {
      list: [],
      products: [],
      banners: [],
      loading: false, //加载
      finished: false,
      page: 1,
      lists: [],
    };
  },
  computed: {
    //1. 动态监听全选状态计算属性
    checked: {
      set(flag) {
        // 动态给列表添加checked
        this.lists.map((item) => this.$set(item, "checked", flag)); //this.$set动态添加属性
      },
      get() {
        //   如果购物车中的数据为空 返回false
        if (this.lists.length == 0) {
          return false;
        } else {
          return (
            //   如果选中的的商品长度=商品长度说明全选
            this.lists.length ===
            this.lists.filter((item) => item.checked).length
          );
        }
      },
    },

    // 3. 计算总价
    sumPrice() {
      // 过滤出选中的项
      return this.lists
        .filter((item) => {
          return item.checked;
        })
        .reduce(function (pre, cur) {
          // pre 初始值, 或者计算结束后的返回值。
          // cur  上面函数返回的每一项
          return (pre += cur.product.price * cur.quantity);
        }, 0);
    },

    // 获取选中的项,将来添加订单的时候需要这里的信息
    selectgoods() {
      var selectlist = [];
      this.lists.filter((item) => {
        if (item.checked) {
          // 如果选中了
          selectlist.push({
            quantity: item.quantity,
            product: item._id,
            price: item.product.price,
          });
        }
      });
      return selectlist;
    },
  },

  watch: {},

  methods: {
    async delall() {
      // console.log(this.selectgoods);
      const ids = [];
      //   遍历出选中的项
      this.selectgoods.forEach((item) => {
        ids.push(item.product);
      });

      // 删除选中的项
      //   console.log(this.selectgoods);
      const result = await reqDelcartsAPI(ids);
      //   console.log(result);
      this.getcartlist(); //删除成功重新调用获取购物车列表接口
    },

    async onSubmit() {
      if (this.selectgoods.length > 0) {
        //   console.log(111, this.$store.state); // 看一下vuex状态里面的数据有没有
        const receiver = this.$store.state.address.receiver;
        const regions = this.$store.state.address.regions;
        const address = this.$store.state.address.address;
        // 从vuex中拿到收货人信息
        if (!receiver && !regions && !address) {
          // 只要有一项不存在，就跳转到添加收货人页面
          this.$router.push("/address");
        } else {
          // 如果存在收货人，跳转到订单页面
          const orderDetails = this.selectgoods;
          const result = await reqSaveOrderAPI({
            receiver,
            regions,
            address,
            orderDetails,
          });
          console.log("订单生成成功");
          this.$router.push("/order");
        }
      } else {
        Dialog.alert({
          message: "请选择商品",
        });
      }
    },
    async reqCartListAPI() {
      const result = await reqCartListAPI();
      console.log(result);
      this.lists = result;
    },
    async updataPro(id, num) {
      const result = await addToCart(id, num);
      this.lists.forEach((data) => {
        if (data.product._id == id) {
          data.quantity = data.quantity + num;
        }
      });
    },
    async del(id) {
      const result = await reqDelcartAPI(id);
      this.reqCartListAPI();
    },
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
    godetail(id) {
      this.$router.push("/detail/" + id);
    },
  },
  created() {
    this.reqCartListAPI();
  },
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
.numcart {
  margin-top: 21px;
  float: left;
  width: 80px;
  margin-left: 21px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  width: 100%;
  height: 100%;
}
.good-list {
  padding-bottom: 50px;
}
.goods {
  display: flex;
  padding: 10px;
  background-color: white;
  margin-top: 5px;
}
.a {
  margin-top: 35px;
}
.goods-info p:nth-child(1) {
  float: left;
  font-size: 14px;
  width: 120px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  line-height: 17px;
}
.goods-info p:nth-child(2) {
  float: left;
  margin-top: 16px;
  margin-left: 22px;
  padding-bottom: 8px;
}
.van-checkbox {
  margin-top: 5px;
}
.goods .goods-img {
  width: 80px;
  height: 80px;
  margin: 5px;
  float: left;
  margin-left: 15px;
}
.numvue {
  width: 40px;
  text-align: center;
  border: none;
  font-size: 20px;
  color: orangered;
}
.van-swipe-cell {
  width: 100%;
}
.goods-info {
  flex: 1;
}
.van-checkbox {
  float: left;
}
/* 底部提交订单框 */
.van-submit-bar {
  bottom: 50px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 80px;
}
</style>
