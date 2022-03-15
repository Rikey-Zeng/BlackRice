<template>
    <div class='address'>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
       
      />
      <p @click="aa">aa</p>
    </div>
</template>

<script>
import { Toast } from 'vant';

// import {mapState } from "vuex";
export default {
    
    data() {
        
        return {
            // chosenAddressId: '1',
              list: [
                {
                  id: '1',
                  name: this.$store.state.address.receiver,
                  address: this.$store.state.address.regions,
                  isDefault: true,
                },
                
              ],
        };
    },
    computed: {
    },
    watch: {},
    
    methods: {
         onAdd() {
            this.$router.push('/addressnew')
          },
          onEdit(item, index) {
            Toast('编辑地址:' + index);
          },
          aa(){
            console.log(this.$store.state.address.receiver,"===");
          }
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