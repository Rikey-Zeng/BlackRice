<template>
  <div class="order">
    <van-nav-bar
      title="确认订单"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell title="请添加收货地址" is-link to="address" />

    <div class="order-list" v-if="lists.length > 0">
     
      <div class="orders" v-for="(item, index) in lists" :key="item._id + index">
        <van-swipe-cell>
          
          <img class="orders-img" :src="item.product.coverImg" alt="" />
          
          <div class="orders-info">
            <p class="pad">{{ item.product.name }}</p>
            <p class="pad">￥：{{ item.product.price }}</p>
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

    <van-submit-bar 
      :price="sumPrice * 100" 
      button-text="提交订单" 
      suffix-label="免运费"
      tip="你的收货地址不支持同城送, 我们已为你推荐快递"
      tip-icon="info-o"
      @submit="onSubmit">
    </van-submit-bar>

    
  </div>
  </div>

</template>

<script>
import { Toast } from 'vant';

import { reqGetOrder,reqOrderlist } from "../../api/order";

export default {
  data() {
    return {
      list:[],
      lists:[],

      
    };
    
  },
  computed: {
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
  },
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/cart");
    },
    // 
    async getreqGetOrder() {
      const result = await reqOrderlist();
      console.log(result);
      this.lists = result;
    },
    // 
    async getreqGetOrder(id) {
      const result = await reqGetOrder(id);
      console.log(result);
      this.list = result;
    },
    onSubmit(){
      Toast("成功支付"+"sumPrice * 100"+"元！");
    },
    // 
    
    
  },
  created() {
    this.getreqGetOrder();
  },
  mounted() {},
  components: {},
};
</script>
<style scoped></style>
