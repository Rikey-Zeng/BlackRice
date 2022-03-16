<template>
  <div class="address">
      <van-nav-bar
    
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    
  />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
import { areaList } from '@vant/area-data';
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  computed: {
    
      },
  watch: {},

  methods: {
    onSave(content) {
      this.addressInfo = content;
      this.$store.commit("address/changereceiver", content.name); // 把收货人名字写进vuex中
      this.$store.commit(
        "address/changeregions",
        content.province + "/" + content.city + "/" + content.country
      );
      this.$store.commit("address/changeaddress", content.addressDetail);
      localStorage.setItem(
        "address",
        JSON.stringify({
          receiver: content.name,
          regions:
            content.province + "/" + content.city + "/" + content.country,
          address: content.addressDetail,
        })
      );
      this.$router.push("/cart");
      // vuex持久化
        localStorage.setItem("token", this.$store.state.address.receiver);
    },
    onDelete() {
      Toast('delete');
    },
    onClickLeft() {
      this.$router.back()
    },
    
    
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped>
 p{
   height: 60px;
   background-color: rgb(255, 0, 0);
   color: #fff;
   text-align: center;
   line-height: 60px;
   font-size: 20px;
 }
</style>