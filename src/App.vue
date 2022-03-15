<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route v-if="$route.meta.showFooter">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" :to="{ name: 'Fenlei' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" :to="{ name: 'Mine' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // const token = localStorage.getItem("token");
    // this.$store.commit("changeToken", token);
    // // 持久化处理收货人信息
    // const address = JSON.parse(localStorage.getItem("address"));
    // this.$store.commit("address/changereceiver", address.receiver);
    // this.$store.commit("address/changeregions", address.regions);
    // this.$store.commit("address/changeaddress", address.address);
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
</style>
