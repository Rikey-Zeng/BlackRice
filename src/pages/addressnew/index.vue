<template>
  <div class="address">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
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
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import { reqAddAddress } from "../../api/user";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {
        name: "曾泽霖",
        tel: "13124543456",
        province: "河南",
        city: "郑州",
        addressDetail: "我真帅",
        isDefault: true,
        postalCode: "471952",
      },
      params: {
        receiver: "曾泽霖",
        mobile: "13124543456",
        regions: "河南",
        address: "郑州",
        idDefault: "true",
      },
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSave(content) {
      const result = await reqAddAddress({
        id: 1,
        receiver: content.name,
        mobile: content.tel,
        regions: content.province,
        address: content.province + content.city + content.county,
      });
      console.log(content);
      this.$router.push("/address");
    },
    onDelete() {
      Toast("delete");
    },
    onClickLeft() {
      this.$router.back();
    },
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
p {
  height: 60px;
  background-color: rgb(255, 0, 0);
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
</style>
