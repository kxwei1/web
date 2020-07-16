<template>
  <div class="wrap">
    <!-- header -->
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="content">
      <div class="main">
        <ul>
          <li>
            <div class="left">
              <a class="iconfont" href="#">&#xe50a;</a>
              <img src="../../../static/img/shop_4.jpg" alt="shop_4" />
              <div class="txt">
                <p>
                  <em>欧莱雅面霜</em>
                </p>
                <p>规格：50g</p>
                <p>
                  <span>￥123.00</span>
                </p>
              </div>
            </div>
            <div class="right">
              <div>
                <a href="#">-</a>
                <a href="#">1</a>
                <a href="#">+</a>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../../../static/img/shop_4.jpg" alt="shop_4" />
              <div class="txt">
                <p>
                  <em>欧莱雅面霜</em>
                </p>
                <p>规格：50g</p>
                <p>
                  <span>￥123.00</span>
                </p>
              </div>
            </div>
            <div class="right">
              <div>
                <a href="#">-</a>
                <a href="#">1</a>
                <a href="#">+</a>
              </div>
              <div class="del">
                <a href="#">删除</a>
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <a class="iconfont" href="#">&#xe647;</a>
              <img src="../../../static/img/shop_4.jpg" alt="shop_4" />
              <div class="txt">
                <p>
                  <em>欧莱雅面霜</em>
                </p>
                <p>规格：50g</p>
                <p>
                  <span>￥123.00</span>
                </p>
              </div>
            </div>
            <div class="right">
              <div>
                <a href="#">-</a>
                <a href="#">1</a>
                <a href="#">+</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <footer>
        <div class="left">
          <a class="iconfont" href="#">
            &#xe50a;
            <span>全选</span>
          </a>
        </div>
        <div class="right">
          <div class="txt">
            <p>
              总计：
              <span>163.00</span>
            </p>
            <p>
              <em>不含运费，已优惠￥0.00</em>
            </p>
          </div>
          <p>
            <a href="confirm.html">去结算（2件）</a>
          </p>
        </div>
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
    return {};
  },
  methods: {},
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.mint-header {
  background-color: #f26b11;
}
html,
body {
  height: 100%;
  background: #f1f1f1;
}
.wrap {
  height: 100%;
  background: #ffffff;
}
.header {
  background: #f26b11;
}
.header em {
  font: 0.36rem "微软雅黑";
  color: #ffffff;
  padding-top: .1rem;
}
.header a {
  padding-top: .2rem;
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
  width: .12rem;
  height: .11rem;
  background: #ffffff;
  border-radius: 50%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content .main {
  background: #ffffff;
}
.content .main ul {
  margin-top: .26rem;
}
.content .main ul li {
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
  margin-bottom: .3rem;
  display: flex;
  justify-content: space-between;
  height: 1.47rem;
  padding: 0 .31rem .24rem .24rem;
}
.content .main ul li .left {
  display: flex;
  justify-content: space-between;
}
.content .main ul li .left a {
  margin: auto 0;
  font-size: .34rem;
  margin-right: .43rem;
  color: #b42c1e;
}
.content .main ul li .left img {
  width: 1rem;
  height: 1.07rem;
  margin-top: .4rem;
  margin-right: .36rem;
}
.content .main ul li .left .txt p {
  font: 0.24rem/0.42rem "微软雅黑";
  color: #666666;
}
.content .main ul li .left .txt p em {
  font: 0.26rem/0.68rem "微软雅黑";
  color: #323232;
}
.content .main ul li .left .txt p span {
  font: 0.3rem/0.53rem "微软雅黑";
  color: #e3393a;
}
.content .main ul li .right {
  display: flex;
  align-items: flex-end;
}
.content .main ul li .right div {
  margin-right: .30rem;
  width: 1.7rem;
  height: .57rem;
  border: .02rem solid #454545;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .22rem;
}
.content .main ul li .right div a {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.content .main ul li .right div a:nth-child(2) {
  font: 0.26rem/0.58rem "微软雅黑";
  color: #454545;
  border: .01rem solid #454545;
  border-top: none;
  border-bottom: none;
  padding: 0 .4rem 0 .32rem;
}
.content .main ul li .right .del {
  margin: auto 0;
  width: .57rem;
  height: 1.72rem;
  background: #e43a3d;
  border: none;
}
.content .main ul li .right .del a {
  display: block;
  font: 0.24rem/0.97rem "微软雅黑";
  color: #ffffff;
}
.content .main ul li:nth-child(2) {
  padding: 0 0 .24rem .24rem;
}
.content .main ul li:nth-child(3) a {
  color: #cacaca;
}
.content footer {
  padding-left: .24rem;
  display: flex;
  justify-content: space-between;
}
.content footer .left {
  margin: auto 0;
}
.content footer .left a {
  color: #b93b2d;
}
.content footer .left a span {
  padding-left: .15rem;
  font: 0.24rem "微软雅黑";
  color: #666666;
}
.content footer .right {
  display: flex;
  justify-content: space-between;
  text-align: right;
}
.content footer .right .txt {
  margin: auto 0;
}
.content footer .right .txt p {
  font: 0.3rem/0.47rem "微软雅黑";
  color: #666666;
}
.content footer .right .txt p em {
  font: 0.2rem/0.34rem "微软雅黑";
  color: #666666;
}
.content footer .right .txt p span {
  font: 0.3rem "微软雅黑";
  color: #e6393d;
}
.content footer .right p a {
  text-align: center;
  margin-left: .38rem;
  display: block;
  width: 2.47rem;
  height: 1.14rem;
  background: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fffffd;
}
footer{
  margin-top: 2.3rem;
}
</style>
