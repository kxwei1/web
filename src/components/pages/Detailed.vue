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
        <img :src="goods.img" alt="picDetail_2" />
        <p>{{goods.goodsname}}</p>
        <p>
          <em>￥{{goods.price}}</em>
          <span>（此价格不与套装优惠同时享受）{{this.$store.state.adminUser.uid}}</span>
        </p>
      </div>

      <!-- list -->
      <div class="list">
        <ul>
          <li>
            <!-- 优惠券单元格 -->
            <van-coupon-cell
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              @click="showList = true"
            />
            <!-- 优惠券列表 -->
            <van-popup
              v-model="showList"
              round
              position="bottom"
              style="height: 70%; padding-top: 4px;"
            >
              <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                @change="onChange"
                @exchange="onExchange"
              />
            </van-popup>
          </li>
          <li>
            <b class="font">购买数量:</b>
            <van-stepper v-model="num" integer />
          </li>
          <li>
            <p>商品属性</p>
            <span class="iconfont">&#xe61f;</span>
          </li>
          <li>
            <em>{{goods.specsname}}</em>
            <a href="#">
              <span>{{goods.specsattr}}</span>
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
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button @click="add()" type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { adminUser } from "vuex";
const coupon = {
  available: 1,
  condition: "100",
  reason: "",
  value: 150,
  name: "满2件9折；3件8折",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "15",
  unitDesc: "元",
};
export default {
  components: {},
  props: {},
  data() {
    return {
      goods: [],
      chosenCoupon: -1,
      coupons: [coupon],
      showList: false,
      num: 1,
      info: {
        num: 1,
        uid: "",
        goodsid: "",
      },
    };
  },
  mounted() {
    this.$http
      .get(this.$apis.getgoodsinfo, { id: this.$route.params.id })
      .then((res) => {
        this.goods = res.list[0];
        this.info.uid = this.$store.state.adminUser.uid;
        this.info.goodsid = res.list[0].id;
      });
  },
  methods: {
    add() {
      this.$http.post(this.$apis.cartadd, this.info).then((res) => {
        if (res.code == 200) {
          console.log(res);
          alert("添加成功");

        } else {
          alert("添加失败");
        }
      });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
/* @import "../../assets/css/iconfont.css"; */
.mint-header {
  background-color: #f26b11;
}
.van-icon-arrow::before {
  margin-top: 0.25rem;
}
.van-stepper {
  margin: auto 0;
}
html,
body {
  height: 100%;
  background: #f1f1f1;
}
.wrap {
  padding-bottom: 1rem;
}
.van-goods-action {
  padding-bottom: 1rem;
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
.list ul li .font {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
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
</style>
