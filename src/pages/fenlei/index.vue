<template>
  <div class="fenlei">
    <div class="header">
      <p class="hh">分类 <van-icon name="search" class="name" /></p>
    </div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="item in list"
        :key="item._id"
        :title="item.name"
        @click="fenleiList2(item.name)"
      />
    </van-sidebar>
    <div class="right">
      <img src="./img/分类1.png" alt="" class="p2" />
      <div class="top">
        <p class="p1">精选分类</p>
        <div class="tt">
          <div
            class="tc"
            v-for="data in list2.slice(0, 6)"
            :key="data._id"
            @click="godetail(data._id)"
          >
            <img :src="data.coverImg" alt="" />
            <p>{{ data.name }}</p>
          </div>
        </div>
      </div>
      <div class="top">
        <p class="p1">精选专区</p>
        <div class="tt">
          <div
            class="tc"
            v-for="data in list2.slice(0, 6)"
            :key="data._id"
            @click="godetail(data._id)"
          >
            <img :src="data.coverImg" alt="" />
            <p>{{ data.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqProduct_categories, reqProduct_catelist } from "../../api/product";
export default {
  data() {
    return {
      activeKey: 0,
      list: [],
      list2: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async fenleiList() {
      const result = await reqProduct_categories();
      this.list = result.categories;
      //  console.log(result);
      //  console.log(this.list);
    },
    async fenleiList2(name) {
      console.log(1111, name);
      const result = await reqProduct_catelist(name);
      //  console.log(result);
      this.list2 = result.products;
      //  this.reqProduct_catelist();
    },
    godetail(id) {
      console.log(222, id);
      this.$router.push("/detail/" + id);
    },
    //onLoad默认执行一次
    onLoad(name) {
      // console.log(name);
      this.fenleiList2(name);
    },
  },
  created() {
    this.fenleiList();
    this.onLoad("智能手表");
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
body {
  background-color: rgb(246, 246, 246);
}
.header {
  width: 100%;
  height: 78px;
  line-height: 106px;
  font-size: 18px;
  background-color: white;
}
.hh {
  text-align: center;
  height: 100px;
  margin-top: -30px;
  margin-left: 150px;
}
.van-sidebar {
  width: 80px;
  float: left;
  margin-top: 20px;
}
.van-sidebar-item {
  width: 80px;
  float: left;
  color: black;
  text-align: center;
  height: 54px;
  background-color: white;
}
.right {
  width: 270px;
  float: right;
  color: #a2b0b7;
  margin-top: 17px;
  margin-right: 34px;
}
.colo {
  color: red;
}
.van-sidebar-item--select::before {
  width: 80px;
  height: 50px;
  background: linear-gradient(to right, rgb(230, 170, 92), rgb(208, 139, 48));
}
.right img {
  width: 291px;
  height: 100px;
  border-radius: 10px;
}

.right .top {
  width: 270px;
  height: 200px;
  margin-bottom: 32px;
}
.right .top p {
  width: 270px;
  height: 30px;
  line-height: 30px;
}
.p1 {
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
}
.tt {
  width: 270px;
  height: 190px;
  margin-top: -26px;
  background-color: white;
  border-radius: 30px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 13px;
}
.top img {
  margin-top: 20px;
  width: 80px;
  height: 80px;
  float: left;
}
.tc {
  width: 70px;
  height: 70px;
  float: left;
  margin: 5px 9px;
}
.tc img {
  width: 50px;
  height: 50px;
}
.tc p {
  height: 12px;
  font-size: 12px;
  clear: both;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.van-icon {
  font-size: 25px;
}

.name {
  margin-left: 100px;
}
</style>
