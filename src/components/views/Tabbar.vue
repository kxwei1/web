<template>
  <mt-tabbar fixed>
    <mt-tab-item id="/home" @click.native="switchTab('/home')">
      <img slot="icon" src="../../assets/img/shop-home_on.png" v-if="selected=='/home'"/>
      <img slot="icon" src="../../assets/img/shop-home.png" v-else/>
      首页
    </mt-tab-item>
    <mt-tab-item id="/cart" @click.native="switchTab('/cart')">
      <img slot="icon" src="../../assets/img/xcx_cart_on.png" v-if="selected=='/cart'"/>
      <img slot="icon" src="../../assets/img/xcx_cart.png" v-else/>
      购物车
    </mt-tab-item>
    <mt-tab-item id="/my" @click.native="switchTab('/my')">
      <img slot="icon" src="../../assets/img/user_on.png" v-if="selected=='/my'"/>
      <img slot="icon" src="../../assets/img/user.png" v-else/>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
        selected:'/home'
    };
  },
  mounted(){
    
  },
  methods: {
      switchTab(name){
          if(this.$route.path==name){
              return
          }
          this.$router.push(name)
      }
  },
  filter: {},
  computed: {},
  watch: {
      $route(){
          this.selected=this.$route.path;

      }

  }
};
</script>

<style scoped>
</style>
