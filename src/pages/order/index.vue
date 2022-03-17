<template>
  <div class="orderlist">
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :title="item"
          class="ordli"
        >
          <van-checkbox class="checkbox" v-model="item.checked" />
          <!-- <span @click="ord(item._id)"> -->
          <span>
            <p>姓名：{{ item.receiver }}</p>
            <p>电话{{ item.regions }}</p>
            <p>详细地址：{{ item.address }}</p>
            <div class="a">总价{{ item.price }}</div>
          </span>
          <span class="orddel" v-if="item.checked" @click="del(item._id, index)"
            >删除</span
          >
        </li>
      </ul>
    </van-list>
    <div class="dibu">
      <!-- <button>删除</button> -->
      <van-checkbox v-model="checked">全选</van-checkbox>
      <van-icon name="delete-o" @click="delall" />
    </div>
  </div>
</template>

<script>
import { reqOrderslist, reqDelmanydel, reqDelmanydels } from "../../api/order";

export default {
  data() {
    return {
      rsslist: [],
      list: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  computed: {
    aa() {
      return 123;
    },
    // 获取选中的项,将来添加订单的时候需要这里的信息
    selectgoods() {
      var selectlist = [];
      this.list.filter((item) => {
        if (item.checked) {
          // 如果选中了
          selectlist.push(item._id);
        }
      });
      return selectlist;
    },
    checked: {
      // set表示设置值
      set(flag) {
        // console.log(111, flag);
        // 动态给列表添加checked
        this.list.map((item) => this.$set(item, "checked", flag)); // this.$set动态添加属性
      },
      // 表示最终返回值
      get() {
        if (this.list.length == 0) {
          return false; // 如果没有数据的话(购物车中的数据被删除完了，返回false)
        } else {
          // 如果选中的商品的长度等于list的长度，说明全选
          return (
            this.list.length === this.list.filter((item) => item.checked).length
          );
        }
      },
    },
    // 计算总价
  },

  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    // 单个删除
    async del(id, index) {
      console.log(id);
      const result = await reqDelmanydel(id);
      console.log(id, result);
      this.list.splice(index, 1);
      // this.initress(); //删除成功重新调用获取列表接口
    },

    // 批量删除
    async delall() {
      // // 删除选中的项
      const result = await reqDelmanydels(this.selectgoods);
      console.log("result", result);
      this.list = [];

      // this.initress(); //删除成功重新调用获取列表接口
    },
    //列出所有
    async initress() {
      this.loading = true; // 开启加载
      const result = await reqOrderslist(this.page);
      console.log("result", result);
      this.loading = false; // 关闭加载
      this.rsslist = [...this.rsslist, ...result.orders]; // 把新获取的数据加上前面的数据展示出来
      this.list = this.rsslist;
      if (result.orders.length < 10) {
        // 说明是最后一页
        this.finished = true; // 关闭
      } else {
        this.page++;
      }
    },
    onLoad() {
      this.initress(); // 在created里面调用接口
    },
  },

  created() {
    this.initress();
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
body {
  background-color: gainsboro;
}
.ordli {
  display: flex;
  background-color: white;
  margin-top: 5px;
  height: 120px;
}
.dibu {
  height: 30px;
  position: fixed;
  bottom: 0;
}
.dibu div {
  display: flex;
  float: left;
}
.orddel {
  display: flex;
  align-items: flex-end;
}
.checkbox {
  margin-top: -10px;
  margin-left: 10px;
}
span {
  float: left;
  display: block;
  margin: 10px;
  line-height: 25px;
  margin-left: 20px;
}
.van-icon-delete-o {
  margin-top: 5px;
  font-size: 20px;
  margin-left: 5px;
}
.a {
  font-size: 18px;
  color: orangered;
}
</style>
