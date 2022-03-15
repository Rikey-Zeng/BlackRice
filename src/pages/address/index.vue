<template>
    <div class='address'>
      <van-nav-bar
        title="收货地址"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
      />
        <van-address-edit
            :area-list="areaList"
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
import { areaList } from '@vant/area-data';

export default {   
    data() {
        return {
            areaList,
            searchResult: [],
            addressInfo: {
              name: "",
              tel: "",
              province: "",
              city: "",
              addressDetail: "",
              isDefault: true,
              postalCode: "",
            },
        };
    },
    computed: {},
    watch: {},
    
    methods: {
      onClickLeft() {
        this.$router.push("/order");
      },
      // 
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
        this.$router.push("/order");
      },
      // 
      onDelete() {
        Toast('删除成功！');
      },
      onChangeDetail(){},
    },
    created() {
        
    },
    mounted() {
        
    },
    components: {},
    }
</script>
<style scoped>

</style>