<template>
  <van-tabbar v-model="active" active-color="#f26b11" inactive-color="#000" router>
    <van-tabbar-item replace to="/home" icon="shop-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      selected: "/home",
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    };
  },
  mounted() {},
  methods: {
    switchTab(name) {
      if (this.$route.path == name) {
        return;
      }
      this.$router.push(name);
    },
  },
  filter: {},
  computed: {},
  watch: {
    $route() {
      this.selected = this.$route.path;
    },
  },
};
</script>

<style scoped>
</style>
