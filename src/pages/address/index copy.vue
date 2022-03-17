<template>
  <div class="address">
     <!-- 头部 -->
<van-nav-bar
  title="新增地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
>
</van-nav-bar>
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
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import {reqAddAddress} from '../../api/user'

export default {
  data() {
    return {
   // 返回
      onClickLeft() {
      Toast(history.back(-1));
    },
    onClickRight() {
      Toast('按钮');
    },
    // 
      areaList,
      searchResult: [],
    //收货人信息初始值
      addressInfo: {
        name: "张三",//收货人姓名
        tel: "15236532630",//收货人手机号
        province: "河南",//省份
        city: "郑州",//城市
        county:"高新区",
        addressDetail: "河南省郑州市高新区银杏路",//详细地址
        isDefault: true,//是否为默认地址
        postalCode: "471952",//邮政编码
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    //   保存按钮
   async onSave(content) {
        // 收货人信息初始值=传进来的参数
      this.addressInfo = content;
// console.log(content);
      this.$store.commit("address/changereceiver", content.name); // 把收货人名字写进vuex中
      this.$store.commit(
        "address/changeregions",
        content.province + "/" + content.city + "/" + content.country
      );
      this.$store.commit("address/changeaddress", content.addressDetail);
    // 存进 localStorage  实现收货人信息持久化处理
      localStorage.setItem(
        "address",
        JSON.stringify({
          receiver: content.name,//名字
          regions:content.tel,
          address:content.province + "/" + content.city + "/" + content.country,//收货的省市区县
          address: content.addressDetail,//收货地址
        })
      );
    const result = await reqAddAddress({
          receiver: content.name,//名字
          regions:content.tel,
          address:content.province + "/" + content.city + "/" + content.country,//收货的省市区县
          address: content.addressDetail, //收货地址
          });
  //  console.log(result);
  Toast(history.back(-1));
    Toast('新增地址成功');
      // this.$router.push("/cart");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail() {},
  },
  created() {},
  mounted() {},
  components: {},
};
</script>
<style scoped></style>
