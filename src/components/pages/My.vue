<template>
  <div class="wrap">
    <!-- header -->
    <mt-header title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="content">
      <!-- login -->
      <div class="login">
        <header>
          <div class="left clearfix">
            <van-image
              round
              width="1.5rem"
              height="1.5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <p>
              {{userInfo.nickname}}
              <br />
              <span>V1</span>
            </p>
          </div>
          <div class="right">
            <van-button v-if="this.$store.state.adminUser.nickname" @click="quit" type="info">退出登录</van-button>
            <van-button v-else to="/login" type="info">未登录</van-button>
          </div>
        </header>
        <van-grid icon-size="0.55rem">
          <van-grid-item
            v-for="(item,index) of grids"
            :key="index"
            :icon="item.img"
            :text="item.title"
          />
        </van-grid>
      </div>
      <!-- main -->
      <div class="main">
        <ul>
          <li>
            <a href="#">
              <p>
                <img src="../../../static/img/iconMine_4.jpg" alt="iconMine_4" />地址管理
              </p>
              <span class="iconfont">&#xe525;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <img src="../../../static/img/iconMine_5.jpg" alt="iconMine_5" />我的钱包
              </p>
              <span class="iconfont">
                <em>200余额</em>&#xe525;
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <img src="../../../static/img/iconMine_6.jpg" alt="iconMine_6" />我的优惠券
              </p>
              <span class="iconfont">&#xe525;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <img src="../../../static/img/iconMine_7.jpg" alt="iconMine_7" />我的二维码
              </p>
              <span class="iconfont">&#xe525;</span>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <img src="../../../static/img/iconMine_8.jpg" alt="iconMine_8" />我的小伙伴
              </p>
              <span class="iconfont">&#xe525;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      grids: [
        {
          img: "../../../static/img/iconMine_1.jpg",
          title: "全部订单",
        },
        {
          img: "../../../static/img/iconMine_2.jpg",
          title: "待付款",
        },
        {
          img: "../../../static/img/iconMine_3.jpg",
          title: "代收款",
        },
      ],
      userInfo: {},
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : {};
    console.log(this.userInfo);
  },
  methods: {
    ...mapActions(["setAdminUserSync"]),

    quit() {
      this.setAdminUserSync({});
      this.$router.push("/login");
      this.userInfo = {};
    },
  },
  filter: {},
  computed: {
    ...mapGetters(["userInfo"]),
  },
  watch: {},
};
</script>

<style scoped>
.van-grid-item {
  margin: 0 15px;
  /* padding-right:20px; */
}
.van-grid {
  width: 100%;
}
.mint-header {
  background-color: #f26b11;
}
html,
body {
  height: 100%;
  background: #f1f1f1;
}
.login {
  margin-bottom: 0.21rem;
}
.login header {
  padding: 0.28rem 0.38rem 0.27rem 0.33rem;
  background: #f26b11;
  display: flex;
  justify-content: space-between;
}
.login header .left {
  display: flex;
}
.van-image {
  background: #822e02;
  border: 0.05rem solid #ffffff;
  border-radius: 50%;
}
.login header .left p {
  padding: 0.24rem 0 0 0.26rem;
  font: 0.3rem/0.52rem "微软雅黑";
  color: #ffffff;
}
.login header .left p span {
  font: italic 0.31rem/0.52rem Calibri;
  color: #333333;
}
.login header .right {
  padding-top: 0.44rem;
}
.login header .right a {
  text-align: center;
  display: block;
  background: #ffffff;
  font: 0.28rem/0.71rem "微软雅黑";
  color: #f26b11;
  width: 1.59rem;
  border-radius: 0.06rem;
}
.login footer {
  height: 1.2rem;
  background: #ffffff;
  padding: 0 0.67rem 0 0.49rem;
  bottom: 0;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
.login footer a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login footer a:nth-child(1) img {
  width: 0.41rem;
  height: 0.32rem;
}
.login footer a:nth-child(2) img {
  width: 0.37rem;
  height: 0.31rem;
}
.login footer a:nth-child(3) img {
  width: 0.41rem;
  height: 0.29rem;
}
.login footer a i {
  margin-top: 0.1rem;
  font: 0.25rem "微软雅黑";
  color: #5f5f5f;
}
.main {
  height: 80%;
  background: #ffffff;
}
.main ul li a {
  height: 1.17rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.main ul li a p {
  padding: 0 0.23rem;
  font: 0.26rem "微软雅黑";
  color: #5e5e5e;
}
.main ul li a p img {
  padding-right: 0.2rem;
}
.main ul li a span {
  padding-right: 0.23rem;
  font-size: 0.26rem;
  color: #b4b4b4;
}
.main ul li a span em {
  padding-right: 0.22rem;
  font: 0.24rem "微软雅黑";
  color: #fa6b0b;
}
</style>
