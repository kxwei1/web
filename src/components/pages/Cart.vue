<template>
  <div class="wrap">
    <!-- header -->
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <van-swipe-cell>
      <van-checkbox class="chk" v-model="checked"></van-checkbox>
      <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="right">
        <div>
          <a href="#">-</a>
          <a href="#">{{num}}</a>
          <a href="#">+</a>
        </div>
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <van-checkbox class="chk" v-model="checked"></van-checkbox>
      <van-card
        price="2.00"
        desc="描述信息"
        title="商品标题"
        class="goods-card"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="right">
        <div>
          <a href="#">-</a>
          <a href="#">{{num}}</a>
          <a href="#">+</a>
        </div>
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="allchecked">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      num: 2,
      checked:true,
      allchecked:false
    };
  },
  methods: {
    onSubmit(){

    }
  },
  filter: {},
  computed: {},
  watch: {}
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
  border: 0.02rem solid #454545;
  border-radius: 4px;
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
.right div a {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.right div a:nth-child(2) {
  font: 0.26rem/0.58rem "微软雅黑";
  color: #454545;
  border: 0.01rem solid #454545;
  border-top: none;
  border-bottom: none;
  padding: 0 0.4rem 0 0.32rem;
}
.delete-button {
  height: 100%;
}
.chk{
  position: absolute;
  margin-top: .7rem;
  left: .2rem;
  z-index: 99;
}
.goods-card{
  margin-left: .5rem;
}
</style>
