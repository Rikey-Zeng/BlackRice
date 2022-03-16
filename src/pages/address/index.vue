<template>
  <div class="address">
    <van-nav-bar
      title="收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text=""
      @add="getadd"
      @edit="getiii"
    />
  </div>
</template>

<script>
import { reqaddres } from "../../api/product";
import { updataOrdersAPI } from "../../api/user";
export default {
  data() {
    return {
      chosenAddressId: "",
      list: [],
      loading: false,
      finished: false,
      finishedtext: "没有更多了",
    };
  },
  computed: {},
  watch: {},

  methods: {
    // onLoad() {
    //   // this.getmsg();
    // },
    async getadd() {
      this.$router.push("/addressnew");
    },
    async getmsg() {
      // this.loading = true;
      const result = await reqaddres();
      if (result.addresses != 0) {
        this.finishedtext = "";
      }
      this.loading = false;
      console.log(result);
      result.addresses.forEach((item, index) => {
        this.chosenAddressId = index;
        console.log(item);
        const arr = {
          id: item._id,
          name: item.receiver,
          tel: item.mobile,
          address: item.address,
          isDefault: true,
        };

        // console.log(arr);
        this.list.push(arr);
        // console.log(this.list);
      });
    },
    getiii(item) {
      console.log(item.id);
      this.$router.push("/addressdel/" + item.id);
    },
    onClickLeft() {
      this.$router.push("/order");
    },
  },
  created() {},
  mounted() {
    this.getmsg();
  },
  components: {},
};
</script>
<style scoped>
.van-address-item__name {
  font-size: 20px;
}
</style>
