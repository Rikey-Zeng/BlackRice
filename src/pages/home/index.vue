<template>
  <div class="home">

    <!--1. login -->
  <div class="header_one">
  <img src="./img/youpin.png" alt="" class="logo_youpin">
  <div class="input_box">
  <input class="logo_input" type="text" placeholder="搜一搜">
  <van-icon name="search" class="loho_icon" />
  </div>
  </div>
    <!--2. 轮播图 -->
  <div class="swiper_box">
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in banners.slice(0,12)" :key="item._id+index"  @click="godetail(item._id)">
<img :src="item.coverImg" alt="">
  </van-swipe-item>

 </van-swipe>
    </div>
    <!-- 上新精选 -->
    <div class="box_two">
    <div class="img_two"><a href=""><img src="./img/01.png" alt="">上新精选</a></div>
    <div class="img_two"><a href=""><img src="./img/02.png" alt="">小米众筹</a></div>
    <div class="img_two"><a href=""><img src="./img/03.png" alt="">有品秒杀</a></div>
    <div class="img_two"><a href=""><img src="./img/04.png" alt="">生活优选</a></div>
    <div class="img_two"><a href=""><img src="./img/05.png" alt="">小米自营</a></div>
    </div>
    <!-- 直播预约 -->
    <div class="zhibo_box">
      <a href="">
      <img src="./img/zhibo.gif" alt="">
      </a>
    </div>
    <!-- 精品优选 -->
    <div class="jingpin_box">
     <div class="sm_jingpin" v-for="(item,index) in banners.slice(0,4)" :key="item._id+index"  @click="godetail(item._id)" >
     <img :src="item.coverImg" alt="">
     <p>{{item.name}}</p>
     <span>￥{{item.price}}</span>
     </div>
    </div>
  
  <!-- 众筹 -->
    <div class="box_zhongchou">
<div class="box_zhongchou_con">
  <!-- 左边 -->
  <div class="box_zccon_r">
<div class="zc">小米有品众筹<span>1元支持</span></div>
<div class="box_zccon_r_con">
<div class="box_zccon_r_con_right">
<p>米家家居伴侣</p>
<p class="dallo">￥299</p>
</div>
<img src="./img/022.png" alt="">
<div class="font-color">1.6万人支持        
<b style="margin:5px;color:red">完成度5056%</b></div>

</div>
</div>
<!-- 右 -->
<div class="box_zccon_l">
<div style="float:right">4款众筹中<van-icon name="arrow" /></div>

</div>
</div>
    </div>
    <!--  -->
    <div style="height:100px">

    </div>
    </div>
</template>

<script>
import {
reqProducts,//获取商品接口
reqBanners,//轮播图
} from '../../api/product'
export default {
  data() {
    return {
       banners:[],
    };
  },
  computed: {
   
  },
  watch: {},

  methods: {
     // 轮播图
     async initBanners(){
            const result = await reqBanners();
            this.banners = result.products;
            // console.log( 1111,this.banners);
        },


    // 商品接口
   
  // 点击跳转详情页
    godetail(id){
         this.$router.push("/detail/"+id)
    },
  },
  created() {
    this.initBanners();// 轮播图
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>

.logo_youpin{
    color: #fff;
    display: flex;
    width: 10%;
    height: 40.6133px;
    margin-left: 13.12px;
    
}
.logo_input{
    width:100%;
    border: 0px solid black;
    border-radius: 20px;
    float: left;
    margin-left: 10px;
    text-align: center;
    height: 100%;
}
.header_one{
  display: flex;
  width: 100%;
  height: 41px;
  padding: 10px;
  background-color: rgb(132,93,50);
   
}
.input_box{
  position: relative;
  width: 75%;
  height: 40px;
}
.loho_icon{
  position: absolute;
  left: 20px;
  top: 10px;
  font-size: 23px;
  color: rgb(151, 155, 158);
}
/* 轮播图 */
.swiper_box{
width: 100%;
height: 200px;
background-color: aqua;
}
 .my-swipe .van-swipe-item {
    text-align: center;
    background-color: #f4f4f4;
  }
  .van-swipe-item img{
    width: 100%;
    height: 200px;
  }
  /* 上新精选 */
  .box_two{
    width: 100%;
    height: 100px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: space-around;
    padding-bottom: 5px;
    overflow: hidden;
  }
  .img_two img{
    display: block;
    width: 82px;
    height: 80px;
  }
   .img_two {
    width: 82px;
    height: 100px;
    font-size: 14px;
    text-align: center;
  }
  /* 直播预约 */
  .zhibo_box{
    width: 100%;
    height: 160px;
   
  }
  .zhibo_box img{
    width: 100%;
    height: 156px;
  }
  /* 精品优选 */
  .jingpin_box{
    width: 100%;
    height: 145px;
    background-color: #f4f4f4;
    padding: 15px;
    display: flex;
  margin-top: -5px;
    
  }
  .sm_jingpin{
    background-color: #fff;
    width: 22%;
    margin: .8%;
    height: 131px;
    text-align: center;
    border-radius: 10px;
  }
  .sm_jingpin img{
    width:100%;
    height: 85px;
  }
  .sm_jingpin p{
  font-size: 13px;
  margin: 0;
  overflow: hidden;
  width: 100%;
 white-space:nowrap;
text-overflow:ellipsis
  }
 .sm_jingpin span{
font-size: 14px;
background-color: #fd9133;
width: 70%;
display:inline-block;
border-radius: 10px;
color: #fff;
  }
  /* 众筹 */
.box_zhongchou{
  background-color: #f4f4f4;
  width: 100%;
  height: 225px;
  box-sizing: border-box;
  padding:0 16px;

}
.box_zhongchou_con{
  width: 100%;
  background-color: #fff;
  height: 200px;
  border-radius: 10px;
}
/* 左边 */
.box_zccon_r {
width: 50%;
height: 200px;
float: left;
font-size:20px;

box-sizing: border-box;
padding: 5px;
}
.zc{
position: relative;
}
.box_zccon_r span{
font-size: 3%;
width: 50px;
height: 20px;
display:inline-block;
background-color: rgb(132,93,50);
position: absolute;
right:-5px;
top: 5px;
text-align: center;
line-height: 20px;
color: #fff;
}
.box_zccon_r_con{
  width: 100%;
  background-color: rgb(243, 243, 217);
  height: 80%;
  border-radius: 10px;
  margin-top: 5px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
}
.box_zccon_r_con_right{
  width: 50%;
  float: left;
  height: 30%;
  font-size: 16px;
  
}
.dallo{
  font-size: 20px; 
  font-weight:bolder;
  color: #ca7327;
  margin: 0;
  position: relative;
}

.box_zccon_r_con img{
   width: 50%;
   float: left;
}
.font-color{
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: grey;
}

.box_zccon_l{
width: 50%;
background-color: rgb(96, 207, 6);
height: 200px;
float: left;
}
</style>
