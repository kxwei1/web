<template>
  <div class="wrap">
    <!-- header -->
    <mt-header title="商品详细">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="content">
      <!-- mian -->
      <div class="main">
        <img :src="goods[0].img" alt="picDetail_2" />
        <p>{{goods[0].goodsname}}</p>
        <p>
          <em>￥{{goods[0].price}}</em>
          <span>（此价格不与套装优惠同时享受）</span>
        </p>
      </div>

      <!-- list -->
      <div class="list">
        <ul>
          <li>
            <p>
              促销：
              <i>满减</i>满2件9折；3件8折
            </p>
            <span class="iconfont">&#xe61f;</span>
          </li>
          <li>
            <p>购买数量</p>
            <div class="right">
              <a href="#">-</a>
              <a href="#">1</a>
              <a href="#">+</a>
            </div>
          </li>
          <li>
            <p>商品属性</p>
            <span class="iconfont">&#xe61f;</span>
          </li>
          <li>
            <em>{{goods[0].specsname}}</em>
            <a href="#">
              <span>{{goods[0].specsattr}}</span>
            </a>
            <a href="#">
              <span>5g</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- detailed -->
      <div class="detailed">
        <header>商品详细</header>
        <div class="img">
          <img src="../../../static/img/picDetail_3.jpg" alt="picDetail_3" />
          <img src="../../../static/img/picDetail_4.jpg" alt="picDetail_4" />
          <img src="../../../static/img/picDetail_5.jpg" alt="picDetail_5" />
          <img src="../../../static/img/picDetail_6.jpg" alt="picDetail_6" />
          <img src="../../../static/img/picDetail_7.jpg" alt="picDetail_7" />
        </div>
      </div>

      <!-- comments -->
      <div class="comments">
        <ul>
          <li>
            <p>
              <i>商品评价</i>
            </p>
          </li>
          <li>
            <p>
              <span>1235668fg</span>
            </p>
            <p>效果很好，物流到位，下次继续来！</p>
            <div>
              <img src="../../../static/img/picDetail_8.jpg" alt="8" />
              <img src="../../../static/img/picDetail_9.jpg" alt="9" />
              <img src="../../../static/img/picDetail_10.jpg" alt="10" />
            </div>
            <p>
              <span>2020-01-13</span>
            </p>
          </li>
          <li>
            <p>
              <span>共1000+条评论</span>
              <a href="#">查看更多></a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      goods: []
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$http
      .get(this.$apis.getgoodsinfo, { id: this.$route.params.id })
      .then(res => {
        console.log(res);
        this.goods = res.list;
      });
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
/* @import "../../assets/css/iconfont.css"; */
.mint-header {
  background-color: #f26b11;
}
html,
body {
  height: 100%;
  background: #f1f1f1;
}
.header {
  display: flex;
  justify-content: space-between;
  background: #f26b11;
}
.header em {
  font: 0.36rem "微软雅黑";
  color: #ffffff;
  padding-top: 0.1rem;
}
.header a {
  padding-top: 0.2rem;
  font: 0.3rem "微软雅黑";
  color: #ffffff;
}
.header .menu {
  display: flex;
  justify-content: space-between;
  width: 0.55rem;
  padding-bottom: 0.36rem;
}
.header .menu span {
  width: 0.12rem;
  height: 0.11rem;
  background: #ffffff;
  border-radius: 50%;
}
.main {
  background: #ffffff;
  margin-bottom: 0.17rem;
}
.main img {
  width: 100%;
}
.main p {
  margin-top: 0.22rem;
  padding: 0 0.37rem 0 0.4rem;
  font: 0.3rem/0.49rem "微软雅黑";
  color: #333333;
}
.main p em {
  font: 0.3rem/0.79rem "微软雅黑";
  color: #e6393b;
}
.main p span {
  font: 0.22rem/0.79rem "微软雅黑";
  color: #878787;
}
.list {
  background: #ffffff;
  padding-bottom: 0.2rem;
  margin-bottom: 0.21rem;
}
.list ul li {
  padding: 0 0.21rem 0 0.25rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #f1f1f1;
}
.list ul li p {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.list ul li p i {
  font: 0.22rem/0.98rem "微软雅黑";
  color: #b0281a;
  border: 0.01rem solid #b0281a;
  padding: 0.07rem 0.09rem 0.09rem 0.1rem;
  margin-right: 0.17rem;
  border-radius: 0.04rem;
}
.list ul li .right {
  margin-top: 0.25rem;
  width: 1.7rem;
  height: 0.57rem;
  border: 0.01rem solid #454545;
  border-radius: 0.04rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.22rem;
}
.list ul li .right a {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.list ul li .right a:nth-child(2) {
  font: 0.26rem/0.58rem "微软雅黑";
  color: #454545;
  border: 0.01rem solid #454545;
  border-top: none;
  border-bottom: none;
  padding: 0 0.4rem 0 0.32rem;
}
.list ul li em {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #b5b5b5;
  margin-right: 0.71rem;
}
.list ul li span {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #b5b5b5;
}
.list ul li a:nth-child(3) span {
  background: #e1e1e3;
}
.list ul li a span {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #ffffff;
  background: #e43a3d;
  padding: 0.19rem 0.51rem 0.12rem;
  border-radius: 0.04rem;
  margin-right: 0.15rem;
}
.list ul li:nth-child(3) {
  border-bottom: none;
}
.list ul li:nth-child(4) {
  justify-content: stretch;
  border-bottom: none;
}
.detailed {
  background: #ffffff;
  margin-bottom: 0.3rem;
}
.detailed header {
  font: 0.3rem/1.18rem "微软雅黑";
  color: #464646;
}
.detailed .img img {
  width: 100%;
}
.comments {
  padding: 0 0.25rem 0.23rem;
  background: #ffffff;
}
.comments ul li {
  border-bottom: 0.01rem solid #eeeeee;
}
.comments ul li p {
  font: 0.26rem/0.54rem "微软雅黑";
  color: #464646;
}
.comments ul li p i {
  font: 0.3rem/0.93rem "微软雅黑";
  color: #464646;
}
.comments ul li p span {
  font: 0.22rem/0.54rem "微软雅黑";
  color: #999999;
}
.comments ul li div img {
  width: 1.56rem;
  height: 1.52rem;
  margin: 0.19rem 0.2rem 0.19rem 0.09rem;
}
.comments ul li a {
  float: right;
  font: 0.22rem/0.54rem "微软雅黑";
  color: #999999;
}
.comments ul li:nth-child(3) {
  border-bottom: none;
}
.footer {
  max-width: 7.5rem;
  background: #ffffff;
  padding: 0;
  bottom: 0;
  top: 93%;
  border-top: 1px solid #ebebeb;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
.footer a {
  margin-top: -0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer a:nth-child(1) {
  width: 1.72rem;
}
.footer a:nth-child(1) img {
  width: 0.51rem;
  height: 0.52rem;
}
.footer a:nth-child(2) {
  width: 2.89rem;
  height: 1.11rem;
  background: #f26b11;
  font: 0.3rem/1.11rem "微软雅黑";
  color: #ffffff;
}
.footer a:nth-child(3) {
  width: 2.89rem;
  height: 1.11rem;
  background: #e43a3d;
  font: 0.3rem/1.11rem "微软雅黑";
  color: #ffffff;
}
.footer a i {
  margin-top: 0.1rem;
  color: #808080;
}
.footer .active i {
  color: #f2661b;
}
</style>
