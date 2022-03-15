<template>
  <div class="detail">  
      <!-- 头部 --> 
  <van-nav-bar
  title="商品详情"
  left-text="返回"
  @click-left="onClickLeft"
  />

  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    
  <van-swipe-item>
    <img src="./img/lunbo0.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img src="./img/lunbo2.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img src="./img/lunbo3.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img src="./img/lunbo.jpg" alt="">
  </van-swipe-item>
</van-swipe>
<!-- label  价格 -->
<div class="label">
  <div class="label-price">
    <span>￥</span>
    <span>549</span>  
    <div class="shouchang">
  <img src="./img/sc.jpg" alt="">
  </div>
  </div>
  <p>￥699</p>

 

</div>
<!-- 会员 -->
 <div class="vip">
    
      <img src="./img/vip.jpg" alt="">
  
  </div>
  
  <!-- 中间文字 -->
  <div class="center">
   

   <div  class="css-901oao" style="color: rgb(51, 51, 51); font-size: 26px; font-weight: 600; line-height: 39px;">车萝卜智能HUD智炫版 智炫版HUD+标配点烟器供电线</div>
    <div  data-focusable="true" tabindex="0" class="css-901oao" style="color: rgb(136, 136, 136); display: flex; font-size: 23px; line-height: 35px; margin-top: 9.5px; padding-right: 19px; padding-left: 19px;">语音交互，高德地图，多车型适配，赠送流量包</div>
    

    <div class="centernn"  style="align-items: center; background-color: rgb(255, 248, 237); border-radius: 9.5px; height: 54.5px; margin-right: 19px; margin-left: 19px; margin-top: 21px; padding-left: 9.5px; -webkit-box-align: center;">
      <div  style="height: 38.5px; width: 38.5px;">
          <div  style="background-image: url(&quot;//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/ranklist_logo.png&quot;);"></div>
          <img  src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/ranklist_logo.png" ></div>
      <div class="centernn1" style="align-items: center; justify-content: flex-start; margin-left: 9.5px; -webkit-box-align: center; -webkit-box-pack: start;">
        <div class="centernn2" style="color: rgb(51, 51, 51); font-size: 23px; font-weight: 400;">车载电器口碑总榜第10名</div>
          <img class="centernn3" src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/ranklist_icon.png" >
        </div>
  
      </div>
  </div>
  <img alt="" draggable="false" src="https://img.youpin.mi-img.com/youpinoper/dfae4d83b02472999fcd224ae1b41935.png?w=996&amp;h=108" class="css-9pa8cd1">


  <!--版本选择  -->
  <div class="option">
           <div  class="option1" >已选 </div>
           <div  class="option2" >智炫版HUD+标配点烟器供电线x1 </div>
           <img   class="option3" src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_min_lightgray.png" >

  </div>
  <!--默认地址  -->
  <div class="address">
        <div class="address1" >送至 </div>
     
        <div class="address2" >北京北京市海淀区清河街道</div>
       
        <img class="address3" src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/icons/icon_arrow_right_min_lightgray.png" >
        <div class=" addressnn">
  <img class="address4" src="//cdn.cnbj1.fds.api.mi-img.com/mijia-m/production/yrn-buz-shop-center/res/images/product/icon_youpin_delivery.png" >
           <span class="address5">有货</span>
           <span class="address6" >，24:00前支付，预计明天(3月15日)发货。</span>
        </div>
        
</div>
<!-- 尾部 -->
<img alt="" src="./img/勾子.jpg" >
<span class="footer">包邮</span>
<img alt="" src="./img/勾子.jpg" >
<span class="footer">7天无理由</span>
<img alt="" src="./img/勾子.jpg" >
<span class="footer">有品配送</span>
<img alt="" src="./img/勾子.jpg" >
<span class="footer">三方店铺</span>
<img alt=""  src="./img/箭头.jpg" >

<div class="footer">包邮</div>
<div class="footer">7天无理由</div>
<div class="footer">有品配送</div>




<!-- 加入购物车 -->
<div >
  <van-goods-action class="cart">
  <!-- <van-goods-action-icon icon="chat-o" text="客服" dot /> -->
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" class="cart1" text="加入购物车"  @click="addcart(detail._id)"/>
  <van-goods-action-button type="danger" class="cart1" text="立即购买" />
</van-goods-action>
</div>



</div>

</template>

<script>
import { reqProductById } from "../../api/product";
import{addToCart} from "../../api/cart";
import { Toast } from 'vant';
export default {
  data() {
    return {};
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
    // 
      onClickLeft() {
      Toast(history.back(-1));
    },

       async loadDetail(id){
            const result = await reqProductById(id);
            console.log(result);
            this.detail = result;
        },
        async addcart(id){
          const result = await addToCart(id);
          console.log(result);
        //    添加成功  ，跳转到购物车页面
         this.$router.push("/cart");
        },

  },
  created() {
         const id = this.$route.params.id;
    this.loadDetail(id);
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.detail{
  width: 600px;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
 
    height: 600px;
  }
   .my-swipe img{
width: 600px;
height: 600px;
     
   }
   .label{
     width: 600px;
     height: 100px;
     /* background-color: yellow; */
     overflow: hidden;
      padding: 0 8px 0 19px;
      box-sizing: border-box;
      position: relative;
    
   }
   .label-price{
    height: 56px;
     /* background-color: skyblue; */
     margin-top:14.5px; 
    width: 600px;
       display: flex;
       position: relative;
   }
    .label-price span:nth-of-type(1){
      width: 14.4px;
      height: 34.4px;
      color: #99621A;
      font-size:26px;
       font-weight: 500;
       display: block;
       float: left;
       /* background-color: gray; */
       margin-top: 18px;
    }
    .label-price span:nth-of-type(2){
       display: block;
      color:rgb(153, 98, 26);
       width:70px;
       height: 56px;
       line-height: 66px;
       font-size:42px;
        /* background-color: pink; */
        font-weight: 500;
        margin-left: 10px;
        float: left;
     
    }

    .shouchang img{
      width: 66px;
      height: 66px;
         position:absolute;
        right: 30px;
     
     
    }
    .shouchang{
      width: 66px;
      height: 66px;
     float: right;
    }
  .label p{
    height: 30px;
    width: 600px;
    /* background-color:pink; */
    position:absolute;
    bottom: 0px;
    margin: 0px;
    left: 20px;
    text-decoration: line-through;
    }
    
    
    .vip  img{
      width:  562px;
      height: 77 px;
      position: absolute;
      left: 20px;
    }
    .center{
      height: 200px;
      /* background-color: skyblue; */
      margin-top:90px;
      padding: 10px 16px
    }
    .centernn{
      margin: 0px;
     
    }
    .centernn1{
/* position: absolute; */
 position: relative;
    }
    .centernn2{
position: absolute;
left: 70px;
top:-25px;
}
.centernn3{
position: absolute;
right: 10px;
top: -45px;

}


    .css-9pa8cd1{
      height: 66.6px;
      width: 600px;
      margin-top:10px;
    }
    .option{
      width: 600px;
      height: 60.6px;
      /* background-color: pink; */
      position: relative;
    }
    .option1{
color: rgb(136, 136, 136); 
font-size: 23px; line-height: 35px;
position:absolute;
left: 30px;
top: 15px;
    }
    .option2{
color: rgb(51, 51, 51); font-size: 23px; line-height: 35px; margin-right: 8px;
position:absolute;
left: 100px;
top: 15px;
    }
    .option3{
      width: 38.5px;
      height:38.5px ;
      position:absolute;
      right: 50px;
top: 15px;
    }
    .address{
      width: 600px;
      height: 250px;
      position: relative;
    }
    .address1{
color: rgb(136, 136, 136); font-size: 23px; line-height: 35px;
position: absolute;
left: 30px;
top: 15px;
    }
  
    .address2{
      color: rgb(51, 51, 51); font-size: 23px; line-height: 35px; margin-right: 8px; width: 445px;
      position: absolute;
      left: 100px;
top: 15px;
    }
    .address3{
position: absolute;
  right: 50px;
top: 15px;
 width: 38.5px;
      height:38.5px ;
    }
  .address4{
width: 96px;
height:22.5px ;
    }
      .address5{
        color: rgb(255, 27, 27); font-size: 23px; line-height: 37px;
    }
    
    .address6{
color: rgb(51, 51, 51); font-size: 23px; line-height: 37px;
    }
    .addressnn{
width: 400px;
height: 100px;
position: absolute;
left: 100px;
top: 50px;
    }
    .cart
    {
      width: 550px;
      margin-left:30px;
       height: 67px;
    }
    .cart1{
      width: 207px;
      height: 67px;
      font-size: 22.5px;
    }

    .footer
    {
      color: rgb(51, 51, 51); font-size: 30px; line-height: 47px;
    }
    
</style>
