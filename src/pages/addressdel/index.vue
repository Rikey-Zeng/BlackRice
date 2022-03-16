<template>
  <div class="addressdel">
    <van-nav-bar
      title="添加收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      :addressInfo="addressInfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { updataOrdersAPI } from "../../api/product";
import { getaddressAPI, deladdressAPI } from "../../api/product";
import { areaList } from "@vant/area-data";
import Vue from "vue";
import { AddressEdit } from "vant";
Vue.use(AddressEdit);
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {},
      tela: {
        receiver: "", //收货人姓名
        mobile: "", //手机号
        regions: "", //地区信息(河南省-郑州市-二七区)
        address: "", //详细地址(航海路1290号)
        idDefault: false, //是否默认(true/false)
      },
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/order");
    },
    async save(id) {
      const result = await getaddressAPI(id);
      console.log(result);
      this.addressInfo = {
        name: result.receiver,
        tel: result.mobile,
        addressDetail: result.address,
        isDefault: result.isDefault,
      };
    },
    async onSave(data) {
      // console.log(data);
      // console.log("修改");
      const id = this.$route.params.id;
      console.log(id);
      this.tela.receiver = data.name;
      this.tela.mobile = data.tel;
      this.tela.regions = data.province + "-" + data.city + "-" + data.county;
      this.tela.address = data.addressDetail;
      this.tela.idDefault = data.isDefault;
      // console.log(this.tela.idDefault);
      console.log(11111, this.tela);
      const params = await updataOrdersAPI(id, this.tela); //收货地址修改
      console.log(params);
      this.$router.push("/address");
    },
    async onDelete() {
      const result = await deladdressAPI(this.$route.params.id);
      this.$router.push("/address");
    },
  },

  created() {
    const id = this.$route.params.id;
    this.save(id);
  },
  mounted() {},
  components: {},
};
</script>
<style scoped></style>
