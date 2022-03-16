<template>
  <div class="detail" v-if="detail">
    <!-- 头部 -->
    <van-nav-bar title="商品详情" left-text="返回" @click-left="onClickLeft" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="detail.coverImg | formurl" alt="" />
      </van-swipe-item>
      <!-- <van-swipe-item>
        <img src="./img/lunbo3.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./img/lunbo.jpg" alt="" />
      </van-swipe-item> -->
      -->
    </van-swipe>

    <div class="center">
      <!-- label 价格 -->
      <div class="label">
        <span class="label1" style="">￥</span>
        <span class="label2" style="">{{ detail.price }}</span>
        <div class="label3" style="">￥{{ detail.price }}</div>
        <img class="label4" alt="" src="./img/sc.jpg" />
      </div>

      <!-- vip -->
      <img class="vip" src="./img/vip.jpg" alt="" />
      <!-- title -->
      <div>
        <div class="titi">
          <!-- 车萝卜智能HUD智炫版 智炫版HUD+标配点烟器供电线 -->
          {{ detail.name }}
        </div>
        <div class="titi1" style="">
          语音交互，高德地图，多车型适配，赠送流量包
        </div>
      </div>

      <!-- 排行 -->
      <div class="paihang">
        <img class="paihang1" src="./img/bang.jpg" />
        <div class="paihang2" style="">车载电器口碑总榜第10名</div>
        <img class="paihang3" src="./img/jiantou.jpg" />
      </div>

      <!-- 尾部 -->
    </div>

    <!--立即领取 -->
    <img class="liji" src="./img/1000.jpg" alt="" />
    <!-- 脚 -->
    <div class="footer">
      <div class="auto">
        <div class="auto1" style="">已选</div>
        <span class="auto2" style=""
          >智炫版HUD+标配点烟器供电线x{{ detail.quantity }}</span
        >
        <img class="auto3" src="./img/jiantou1.jpg" />
      </div>
      <!-- 默认地址 -->
      <!--默认地址  -->
      <div class="address">
        <div class="address1">送至</div>

        <div class="address2">北京北京市海淀区清河街道</div>

        <img
          class="address3"
          src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_min_lightgray.png"
        />
        <div class="addressnn">
          <img
            class="address4"
            src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/icon_youpin_delivery.png"
          />
          <span class="address5">有货</span>
          <span class="address6">，24:00前支付，预计明天(3月15日)发货。</span>
        </div>
      </div>
      <!-- gouglu -->
      <div class="gouglu">
        <img alt="" src="./img/勾子.jpg" />
        <span>包邮</span>
        <img alt="" src="./img/勾子.jpg" />
        <span>7天无理由</span>
        <img alt="" src="./img/勾子.jpg" />
        <span>有品配送</span>
        <img alt="" src="./img/勾子.jpg" />
        <span>三方店铺</span>
      </div>

      <van-goods-action class="cart">
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button
          type="warning"
          class="cart1"
          text="加入购物车"
          @click="addcart(detail._id)"
        />
        <van-goods-action-button type="danger" class="cart1" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
  <!-- 测试 -->
</template>

<script>
import { reqProductById } from "../../api/product";
import { addToCart } from "../../api/cart";

import { Toast } from "vant";
export default {
  data() {
    return {
      detail: null,
    };
  },
  computed: {},
  watch: {},
  filters: {
    formurl(str) {
      // http://xiaomi....    upload/xx
      if (str) {
        //说明图片存在
        if (str.startsWith("http")) {
          // 说明使用的是抓取的图片路径
          return str;
        } else {
          return "http://lanlianhua.work:3009/" + str; // 表示自己上传的图片
        }
      } else {
        // 说明没有上传图片
        return "http://www.superslide2.com/demo/images/pic1.jpg";
      }
    },
  },

  methods: {
    onClickLeft() {
      Toast(history.back(-1));
    },
    async loadDetail(id) {
      const result = await reqProductById(id);
      console.log(result);
      this.detail = result;
    },
    async addcart(id) {
      const result = await addToCart(id);
      console.log(result);
      //    添加成功  ，跳转到购物车页面
      this.$router.push("/cart");
    },
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
    this.loadDetail(id);
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.detail {
  width: 100%;
  /* background-color: skyblue; */
}
.my-swipe {
  width: 100%;
  height: 500px;
}
.my-swipe img {
  width: 100%;
  height: 500px;
}
.center {
  padding: 20px;
}

.label {
  width: 100%;
  height: 70px;
  /* background-color: pink; */
  position: relative;
  margin-bottom: 30px;
}
.label1 {
  color: rgb(153, 98, 26);
  font-size: 26px;
  font-weight: 500;
  position: relative;
  top: -2px;
  position: absolute;
  left: 0px;
  top: 20px;
}
.label2 {
  color: rgb(153, 98, 26);
  font-size: 42px;
  font-weight: 500;
  margin-left: 3px;
  position: absolute;
  left: 20px;
  top: 8.5px;
}
.label3 {
  color: rgba(0, 0, 0, 0.4);
  font-size: 23px;
  margin-left: 19px;
  text-decoration-line: line-through;
  position: absolute;
  left: 0px;
  bottom: -5px;
}
.label4 {
  position: absolute;
  right: -25px;
  top: 8.5px;
  width: 70px;
}
.vip {
  width: 100%;
  height: 66px;
}
.titi {
  color: rgb(51, 51, 51);
  font-size: 23px;
  font-weight: 600;
  line-height: 39px;
  margin-top: 20px;
}
.titi1 {
  color: rgb(136, 136, 136);
  display: flex;
  font-size: 20px;
  line-height: 35px;
  margin-top: 9.5px;
  padding-right: 19px;
}
.paihang {
  align-items: center;
  background-color: rgb(255, 248, 237);
  border-radius: 9.5px;
  height: 54.5px;
  margin-right: 19px;
  margin-left: 19px;
  margin-top: 21px;
  padding-left: 9.5px;
  -webkit-box-align: center;
  position: relative;
}
.paihang1 {
  width: 38.5px;
  height: 38.5px;
  position: absolute;
  top: 10px;
}
.paihang2 {
  position: absolute;
  left: 60px;
  top: 18px;
  color: rgb(51, 51, 51);
  font-size: 19px;
  font-weight: 400;
}
.paihang3 {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 50px;
}
.liji {
  display: block;
  width: 100%;
  height: 67px;
  margin-top: 20px;
}
.footer {
  padding: 20px;
  padding-right: 20px;
  width: 100%;
  /* background-color: gray; */
  height: 200px;
  box-sizing: border-box;
}
.auto {
  /* background-color: yellow; */
  height: 62.5px;
  position: relative;
  margin-top: 25px;
}
.auto1 {
  color: rgb(136, 136, 136);
  font-size: 18px;
  line-height: 35px;
  position: absolute;

  top: 15px;
}

.auto2 {
  color: rgb(95, 95, 95);
  font-size: 17px;
  font-weight: bold;
  line-height: 4px;
  margin-right: 8px;
  width: 112px;
  position: relative;
  left: 60px;
  /* display: inline-block; */
  width: 100%;
  top: 24px;
  /* margin-left: 60px; */
  /* margin-top: 15px; */
}
.auto3 {
  position: absolute;
  right: 0px;
  top: 6px;
  width: 50px;
}
.address {
  width: 100%;
  height: 150px;
  position: relative;
  /* background-color: skyblue; */
  box-sizing: border-box;
}
.address1 {
  color: rgb(136, 136, 136);
  font-size: 18px;
  line-height: 35px;
  position: absolute;
  top: 15px;
}

.address2 {
  color: rgb(51, 51, 51);
  font-size: 17px;
  position: absolute;
  left: 60px;
  top: 24px;
}
.address3 {
  position: absolute;
  right: 0px;
  top: 8px;
  width: 50px;
}
.address4 {
  width: 80px;
  height: 21px;
  position: absolute;
  left: 60px;
  top: 60px;
}
.address5 {
  color: rgb(255, 27, 27);
  font-size: 17px;
  position: absolute;
  left: 150px;
  top: 60px;
}

.address6 {
  color: rgb(51, 51, 51);
  font-size: 17px;
  position: absolute;
  left: 200px;
  top: 60px;
}

.gouglu {
  height: 120px;
}
.gouglu img {
  width: 30px;
}
</style>
