<template>
  <div class="wrap">
    <!-- header -->
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <van-swipe-cell v-for="item of info" :key="item.id">
      <van-checkbox class="chk" v-model="item.status"></van-checkbox>
      <van-card :price="item.price" :title="item.goodsname" class="goods-card" :thumb="item.img" />
      <div class="right">
        <van-stepper
          @minus="reduceedit(item.id)"
          @plus="addedit(item.id)"
          v-model="item.num"
          integer
        />
      </div>
      <template #right>
        <van-button @click="del(item.id)" square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-submit-bar :price="this.sum" button-text="提交订单" @submit="onSubmit('/confirm')">
      <van-checkbox @click="all()" v-model="allchecked">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>-->
    </van-submit-bar>
  </div>
</template>

<script>
import store from "../../store";

import { mapGetters, mapActions } from "vuex";

export default {
  beforeRouteEnter(to, from, next) {
    let userinfo = store.state.adminUser;
    if (userinfo.token) {
      next();
    } else {
      next("/login");
    }
  },
  components: {},
  props: {},
  data() {
    return {
      num: 2,
      checked: true,
      allchecked: false,
      info: [],
    };
  },

  mounted() {
    this.getcart();
    console.log(this.$store.state.adminUser);
  },
  methods: {
    getcart() {
      this.$http
        .get(this.$apis.cartlist, { uid: this.$store.state.adminUser.uid })
        .then((res) => {
          this.info = res.list;
          this.info.map((item) => {
            item.status = item.status == 1 ? true : false;
          });
        });
    },
    addedit(id) {
      this.$http.post(this.$apis.cartedit, { id, type: 2 }).then((res) => {});
    },
    reduceedit(id) {
      this.$http.post(this.$apis.cartedit, { id, type: 1 }).then((res) => {});
    },
    del(id) {
      this.$http.post(this.$apis.cartdelete, { id }).then((res) => {});
      this.getcart();
    },
    switchTab() {
      this.$router.push(i);
    },
    onSubmit(i) {
      this.$router.push(i);
    },
    all() {
      this.info.map((item) => {
        item.status = this.allchecked;
      });
    },
  },
  filter: {},
  computed: {
    ...mapGetters(["userInfo"]),
    sum: function () {
      let sum = 0;
      this.info.map((item) => {
        if (item.status == true) {
          sum += item.price * item.num * 100;
        }
      });
      console.log(sum);
      return sum;
    },
  },
  watch: {},
};
</script>

<style scoped>
.van-submit-bar {
  bottom: 55px;
}
.mint-header {
  background-color: #f26b11;
}
html,
body {
  height: 100%;
  background: #f1f1f1;
}
/* .van-button--square {
  height: 100%;
} */
.goods-card {
  margin: 0;
  background-color: white;
}
.right div {
  position: absolute;
  margin-right: 0.3rem;
  width: 1.7rem;
  height: 0.57rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.22rem;
}
.right {
  height: 0.61rem;
  margin-left: 4rem;
  margin-top: -0.64rem;
}
.delete-button {
  height: 100%;
}
.chk {
  position: absolute;
  margin-top: 0.7rem;
  left: 0.2rem;
  z-index: 99;
}
.goods-card {
  margin-left: 0.5rem;
}
</style>
