<template>
  <div>
    <mt-header>
      <router-link to="/home" slot="left">
        <mt-button>
          <img class="logo" slot="icon" src="../../assets/img/logo.jpg" />
        </mt-button>
      </router-link>
      <input class="search" slot="right" type="search" placeholder="寻找商品" />
      <mt-button icon="more" slot="right">
        <img style="width:0.4rem" slot="icon" src="../../assets/img/points.png" />
      </mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item :id="index" v-for="(item,index) of navname" :key="index">{{item.catename}}</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <!-- <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="index" v-for="(item,index) of navname" :key="index" >
        <mt-cell :title="item " />
      </mt-tab-container-item>
    </mt-tab-container>-->
    <div class="topbanner">
      <mt-swipe :auto="4000" :speed="500">
        <mt-swipe-item v-for="(bannerurl,index) of bannerimgurl" :key="index">
          <img :src="bannerurl.img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="subNav">
      <a href="#" v-for="(nav,index) of navimgurl" :key="index" @click="switchTab(nav.path)">
        <img :src="nav.src" />
        <i>{{nav.title}}</i>
      </a>
    </div>
    <div class="subMenu">
      <div class="fl">
        <header>
          <p>
            <a href="#">
              <img src="/static/img/timer.jpg" alt="timer" />限时秒杀
            </a>
          </p>
          <p>每天零点场 好货秒不停</p>
          <p>
            <span>02</span>:
            <span>16</span>:
            <span>45</span>
            <i>秒杀</i>
          </p>
        </header>
        <img src="/static/img/shop_5.jpg" alt="shop_5" />
        <em>￥14.8</em>
      </div>
      <div class="fr">
        <header>
          <div class="left">
            <p>
              <a href="#">
                品牌上新
                <span>折</span>
              </a>
            </p>
            <p>每日9点 抢大牌</p>
            <p>
              <img src="/static/img/brand.jpg" alt="brand" />
            </p>
          </div>
          <div class="right">
            <img src="/static/img/shop_1.jpg" alt="shop_1" />
          </div>
        </header>
        <footer>
          <div class="box">
            <p>
              <a href="#">每日十件</a>
            </p>
            <p>只为你选好货</p>
            <img src="/static/img/shop_2.jpg" alt="shop_2" />
          </div>
          <div class="box">
            <p>
              <a href="#">拼啊</a>
            </p>
            <p>超级好价拼团</p>
            <img src="/static/img/shop_3.jpg" alt="shop_3" />
          </div>
        </footer>
      </div>
    </div>
    <div class="banner">
      <a href="#">
        <img src="/static/img/bar.jpg" alt="banner" />
      </a>
    </div>
    <div class="main">
      <div class="guild">
        <ul>
          <li v-for="(item,index) of guild" :key="index">
            <a href=":javaScript">{{item}}</a>
          </li>
        </ul>
      </div>
      <footer>
        <ul>
          <li>
            <img src="/static/img/shop_4.jpg" alt="shop_4" />
            <div class="txt">
              <p>
                <a href="#">雅诗兰熏染发膏60ml</a>
              </p>
              <p>
                <span>￥123.00</span>
              </p>
              <p>已售800件</p>
              <a href="detailed.html">
                <span>立即抢购</span>
              </a>
            </div>
          </li>
          <li>
            <img src="/static/img/shop_4.jpg" alt="shop_4" />
            <div class="txt">
              <p>
                <a href="#">雅诗兰熏染发膏60ml</a>
              </p>
              <p>
                <span>￥123.00</span>
              </p>
              <p>已售800件</p>
              <a href="detailed.html">
                <span>立即抢购</span>
              </a>
            </div>
          </li>
          <li>
            <img src="/static/img/shop_4.jpg" alt="shop_4" />
            <div class="txt">
              <p>
                <a href="#">雅诗兰熏染发膏60ml</a>
              </p>
              <p>
                <span>￥123.00</span>
              </p>
              <p>已售800件</p>
              <a href="detailed.html">
                <span>立即抢购</span>
              </a>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      selected: "/home",
      guild: [],
      bannerimgurl: [],
      navimgurl: [
        {
          src: "/static/img/icon_1.jpg",
          title: "显示抢购",
          path: "/cart"
        },
        {
          src: "/static/img/icon_2.jpg",
          title: "积分商城",
          path: "/cart"
        },
        {
          src: "/static/img/icon_3.jpg",
          title: "联系我们",
          path: "/cart"
        },
        {
          src: "/static/img/icon_4.jpg",
          title: "商品分类",
          path: "/sort"
        }
      ],
      value: "",
      navname: [],
      selected: ""
    };
  },
  mounted() {
    this.$axios.get("/api/getcate").then(res => {
      this.navname = res.data.list;
    });
    this.$axios.get("/api/getbanner").then(res => {
      this.bannerimgurl = res.data.list;
    });
  },
  methods: {
    switchTab(i) {
      this.$router.push(i);
    },
    getcate() {
      return this.$axios.get("/api/getcate");
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.banner img {
  margin-top: 0.2rem;
  width: 100%;
}
.logo {
  width: 1.5rem;
  height: 0.29rem;
}
.mint-header {
  background-color: white;
  height: 1rem;
}
.search {
  width: 3.03rem;
  height: 0.38rem;
  background: #eee;
  border-radius: 0.05rem;
  text-align: center;
  color: #b8b8b8;
  font: 0.18rem/0.38rem "微软雅黑";
  margin-right: 0.5rem;
}
.topbanner {
  position: relative;
  height: 3rem;
}
.mint-swipe-item {
  position: absolute;
}
.mint-swipe-item img {
  width: 6.37rem;
  height: 3.2rem;
}
.subNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 0.31rem 0.49rem 0.1rem 0.38rem;
  border-bottom: 0.01rem solid #ebebeb;
}
.subNav a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subNav a img {
  width: 0.64rem;
  height: 0.62rem;
}
.subNav a i {
  font: 0.24rem/0.79rem "微软雅黑";
  color: #636363;
}
.subMenu {
  margin: 0.3rem 0;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
}
.subMenu .fl {
  position: relative;
  width: 2.7rem;
  padding: 0.16rem 0.2rem 0.2rem;
  border-right: 0.01rem solid #f0f0f0;
}
.subMenu .fl header p {
  font: 0.22rem "微软雅黑";
  color: #828282;
  margin-bottom: 0.09rem;
}
.subMenu .fl header p:nth-last-child(1) {
  margin-top: 0.15rem;
  color: #000;
}
.subMenu .fl header p a {
  font: 0.3rem "微软雅黑";
  color: #ff3196;
}
.subMenu .fl header p a img {
  width: 0.32rem;
  height: 0.32rem;
  padding-top: 0.04rem;
  padding-right: 0.16rem;
  margin: 0;
}
.subMenu .fl header p span {
  padding: 0.12rem 0.08rem 0.13rem 0.1rem;
  background: #27272f;
  border-radius: 0.05rem;
  font: 0.22rem Arial;
  color: #ffffff;
  margin-right: 0.05rem;
}
.subMenu .fl header p i {
  padding: 0.1rem 0.35rem 0.1rem 0.1rem;
  position: relative;
  overflow: hidden;
  background: url(/static/img/bg.jpg) no-repeat;
  background-size: 1rem 0.5rem;
}

.subMenu .fl img {
  width: 2.5rem;
  height: auto;
  margin-top: 0.1rem;
}
.subMenu .fl em {
  position: absolute;
  right: 0.2rem;
  bottom: 0.3rem;
  width: 0.84rem;
  height: 0.64rem;
  background: #ff3179;
  border-radius: 50%;
  font: 0.25rem/0.42rem Arial;
  padding-top: 0.2rem;
  color: #ffffff;
}
.subMenu .fr header {
  display: flex;
  border-bottom: 0.01rem solid #eeeeee;
}
.subMenu .fr header .left {
  padding: 0.18rem 0 0 0.26rem;
}
.subMenu .fr header .left p {
  font: 0.2rem "微软雅黑";
  color: #828282;
}
.subMenu .fr header .left p a {
  font: 0.3rem "微软雅黑";
  color: #fa1c6f;
}
.subMenu .fr header .left p a span {
  font: bold 0.2rem "宋体";
  color: #ffe8f4;
  margin-left: 0.1rem;
  padding: 0.05rem 0.09rem 0.03rem 0.12rem;
  background-image: -webkit-linear-gradient(left, #ff1f54 0%, #ff329d 100%);
}
.subMenu .fr header .left p img {
  width: 0.88rem;
  height: auto;
}
.subMenu .fr header .right img {
  width: 1.3rem;
  height: 1.8rem;
}
.subMenu .fr footer {
  display: flex;
}
.subMenu .fr footer .box {
  padding: 0.18rem 0.2rem 0 0.18rem;
}
.subMenu .fr footer .box:nth-child(1) {
  border-right: 0.01rem solid #eeeeee;
}
.subMenu .fr footer .box p {
  font: 0.2rem "微软雅黑";
  color: #828282;
}
.subMenu .fr footer .box p a {
  font: 0.3rem "微软雅黑";
  color: #fa1c6f;
}
.subMenu .fr footer .box img {
  height: 1.03rem;
  width: auto;
}
.main img {
  width: 2rem;
}
.main {
  margin-top: 0.3rem;
  padding: 0 0.2rem 0.1rem;
  padding-top: 0.2rem;
  background: #ffffff;
  padding-bottom: 1rem;
}
.main .guild ul {
  display: flex;
  justify-content: space-between;
}
.main .guild ul li {
  border: 0.01rem solid #d2d2d2;
  flex-grow: 1;
}
.main .guild ul li a:hover {
  background: #f26b11;
  color: #ffffff;
}
.main .guild ul li a {
  text-align: center;
  display: block;
  font: 0.3rem/0.68rem "微软雅黑";
  color: #000;
}
/* .main .guild ul li:nth-child(1) {
  background: #f26b11;
  border: .01rem solid #f26b11;
}
.main .guild ul li:nth-child(1) a {
  color: #ffffff;
} */
.main footer {
  margin-top: 0.2rem;
}
.main footer ul li {
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 0.45rem 0 0.2rem 0.35rem;
  margin-bottom: 0.34rem;
}
.main footer ul li .txt {
  margin-left: 0.5rem;
}
.main footer ul li .txt p {
  font: 0.23rem "微软雅黑";
  color: #939393;
}
.main footer ul li .txt p a {
  font: 0.3rem "微软雅黑";
  color: #2e2e2e;
}
.main footer ul li .txt p span {
  font: 0.3rem "微软雅黑";
  color: #f22b3e;
}
.main footer ul li .txt a span {
  display: block;
  width: 1.64rem;
  text-align: center;
  font: 0.23rem/0.52rem "微软雅黑";
  color: #fffdff;
  background: #f26c17;
  border-radius: 0.04rem;
}
</style>
