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
    <div class="img_two"><a href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=M_H5.2112.197383.1.29779075&last_scmv2=1008.0.0.0.712&scmv2_num=0&noDL=1"><img src="./img/01.png" alt="">上新精选</a></div>
    <div class="img_two"><a href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=M_H5.2112.197383.1.29779075&last_scmv2=1008.0.0.0.712&scmv2_num=0&noDL=1"><img src="./img/02.png" alt="">小米众筹</a></div>
    <div class="img_two"><a href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=M_H5.2112.197383.1.29779075&last_scmv2=1008.0.0.0.712&scmv2_num=0&noDL=1"><img src="./img/03.png" alt="">有品秒杀</a></div>
    <div class="img_two"><a href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=M_H5.2112.197383.1.29779075&last_scmv2=1008.0.0.0.712&scmv2_num=0&noDL=1"><img src="./img/04.png" alt="">生活优选</a></div>
    <div class="img_two"><a href="https://m.xiaomiyoupin.com/w/new_product_v3?_rt=weex&pageid=4728&sign=846b35b9e94a50a84a0d07b9ab2cc36a&pdl=jianyu&spmref=M_H5.2112.197383.1.29779075&last_scmv2=1008.0.0.0.712&scmv2_num=0&noDL=1"><img src="./img/05.png" alt="">小米自营</a></div>
    </div>
    <!-- 直播预约 -->
    <div class="zhibo_box">
      <a href="">
      <img src="./img/zhibo.gif" alt="">
      </a>
    </div>
    <!-- 精品优选 -->
     <div class="shangxin_box">
      <div class="con-shangxin">

    <div class="box_shangxin">
      <div class="sm_jingpin" v-for="(item,index) in banners" :key="item._id+index"  @click="godetail(item._id)" >
     <img :src="item.coverImg" alt="">
     <p>{{item.name}}</p>
     <span>￥{{item.price}}</span>
     </div>
    </div></div>
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
<a href="https://m.xiaomiyoupin.com/w/crowdfundV2?_rt=weex&pageid=6425&sign=a31558dc483536c81f38a701b1cbefce&pdl=jianyu&spmref=M_H5.2112.77081.1.9608799&scmv2_num=1&noDL=1">
<img src="./img/022.png" alt=""></a>
<div class="font-color">1.6万人支持        
<b style="margin:5px;color:red">完成度5056%</b></div>

</div>
</div>
<!-- 右 -->
<div class="box_zccon_l">
<div style="float:right;">4款众筹中<van-icon name="arrow" /></div>
<div class="zhongchou_l" style="margin-top: 5px;">
<img src="./img/021.png" alt="">
</div>
</div>
</div>
 </div>
    <!--上新精选  -->
    <div class="shangxin_box">
      <div class="con-shangxin">
   <div class="shangxin_header">上新精选<span style="float:right;font-size:12px">更多<van-icon name="arrow" /></span></div>
    <div class="box_shangxin">
      <div class="sm_jingpin" v-for="(item,index) in banners" :key="item._id+index"  @click="godetail(item._id)" >
     <img :src="item.coverImg" alt="">
     <p>{{item.name}}</p>
     <span>￥{{item.price}}</span>
     </div>
    </div></div>
    </div>
    <!--  -->
    <van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
    <!--有品秒杀  -->
    <div class="shangxin_box">
  <div class="con-shangxin">
    <!-- 顶部 -->
   <div class="shangxin_header">有品秒杀
     <!-- 倒计时 -->
    <van-count-down :time="time">
  <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</van-count-down>
     <!-- 右侧 -->
     <span style="float:right;font-size:12px">更多<van-icon name="arrow" /></span>
     </div>
    <div class="box_shangxin">
      <div class="sm_jingpin" v-for="(item,index) in banners" :key="item._id+index"  @click="godetail(item._id)" >
     <img :src="item.coverImg" alt="">
     <p>{{item.name}}</p>
     <span style="width:100%">￥{{item.price}}</span>
     </div>
    </div></div>
    </div>
    <!-- 最后空白 -->
    <div class="di">
 <van-divider style=";margin:0;display:block;line-height:50px;text-align:center;;">更多好物，敬请期待</van-divider>
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
        time: 70 * 60 * 60 * 1000,
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
    height: 32.6133px;
    margin-left: 13.12px;
 
}
.logo_input{
    width:100%;
    border: 0px solid black;
    border-radius: 20px;
    float: left;
    margin-left: 10px;
    text-align: center;
    height: 80%;
}
.header_one{
  display: flex;
  width: 100%;
  height: 51px;
  padding: 10px;
  background-color: rgb(132,93,50);
 box-sizing: border-box;
   
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
height: 170px;
background-color: aqua;
}
 .my-swipe .van-swipe-item {
    text-align: center;
    background-color: #f4f4f4;
  }
  .van-swipe-item img{
    width: 100%;
    height: 170px;
  }
  /* 上新精选 */
  .box_two{
    width: 100%;
    height: 80px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: space-around;
    padding-bottom: 5px;
    overflow: hidden;
  }
  .img_two img{
    display: block;
    width:62px;
    height: 60px;
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
  
    height: 155px;
    background-color: #f4f4f4;
    padding: 15px;
    display: flex;
    margin-top: -4px;
    box-sizing: border-box;
    width: auto;
   overflow-x: auto;
   white-space:nowrap;
  }
  .sm_jingpin{
    background-color: #fff;
    width: 23%;
    margin: 1%;
    height: 131px;
    text-align: center;
    /* border-radius: 10px; */
    
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
  height: 195px;
  box-sizing: border-box;
  padding:0 16px;
}
.box_zhongchou_con{
  width: 100%;
  background-color: #fff;
  height: 200px;
  border-radius: 10px;
  box-sizing: border-box;

}
/* 左边 */
.box_zccon_r {
width: 50%;
height: 200px;
float: left;
font-size:18px;

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
background-color: rgb(197, 171, 143);
position: absolute;
right:5px;
top: 5px;
text-align: center;
line-height: 20px;
color: #fff;
border-radius: 5px;
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
/* background-color: rgb(96, 207, 6); */
height: 200px;
float: left;
padding: 10px;
box-sizing: border-box;
}
.zhongchou_l{
height:90%;
width:100%;
box-sizing: border-box;
padding: 5px;


}
.zhongchou_l img{
height:100%;
width:100%;
float: left;
background-color: #9ca08c;
border-radius: 5px;
}
/* 上新精选 */
.shangxin_box{
  box-sizing: border-box;
  padding: 16px;
  width: 100%;
  height: auto;
  background-color: #f4f4f4;
  margin: 0;

}
.shangxin_header{
  padding: 5px;
  font-size: 18px;
  box-sizing: border-box;
}
.con-shangxin{
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  margin: 0;
  padding: 5px;
}
/* 有品秒杀 */
.box_shangxin{
   display: flex;
   width: auto;
   overflow-x: auto;
   white-space:nowrap;
   box-sizing: border-box;
   
}
  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
  .van-count-down{
    display: inline-block;

  }
  /* 低 */
  .di{
    background-color: #f4f4f4;
    height: 100px;
  }
</style>
