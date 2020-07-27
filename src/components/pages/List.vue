<template>
  <div class="wrap">
    <!-- header -->
    <mt-header icon="icon">
      <router-link to="/sort" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right">
        <img style="width:0.4rem" slot="icon" src="../../assets/img/points.png" />
      </mt-button>
    </mt-header>
    <div class="content">
      <!-- search -->
      <div class="search">
        <a class="iconfont" href="#">&#xe603; 搜索商品</a>
      </div>

      <!-- main -->
      <div class="main">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item of goodsList" :key="item.id">
            <div class="list">
              <div class="left">
                <a href="#">
                  <img :src="item.img" alt="pic" />
                </a>
              </div>
              <div class="right">
                <p>
                  <a href="#">{{item.goodsname}}</a>
                </p>
                <p>
                  <span>${{item.price}}</span>
                </p>
                <p>3625条评论</p>
              </div>
            </div>
          </van-cell>
        </van-list>
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
      goodsList: [],
      list: [],
      loading: false,
      finished: false,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$http
      .get(this.$apis.getcategoods, { fid: this.$route.params.id })
      .then((res) => {
        this.goodsList = res.list;
      });
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    switchTab(id) {
      this.$router.push("/detailed/" + id);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
.mint-header {
  background-color: white;
  margin-bottom: 15px;
}
html,
body {
  height: 100%;
}
.main {
  margin-bottom: 1rem;
}

.wrap .search {
  text-align: center;
}
.wrap .search a {
  padding: 0.22rem 2.34rem;
  font: 0.3rem/0.77rem "微软雅黑";
  color: #ffffff;
  background: #f26b11;
  border-radius: 0.4rem;
}
.wrap .main {
  height: 80%;
  padding: 0.52rem 0.23rem 0;
}
.wrap .main .list {
  display: flex;
  border-bottom: 0.01rem solid #d1d1d1;
  padding-bottom: 0.2rem;
  padding-top: 0.24rem;
}
.wrap .main .left a img {
  width: 1.65rem;
  height: 1.56rem;
}
.wrap .main .right {
  padding-left: 0.43rem;
  padding-bottom: 0.2rem;
}
.wrap .main .right p {
  font: 0.24rem/0.38rem "微软雅黑";
  color: #999999;
}
.wrap .main .right p a {
  font: 0.24rem/0.36rem "微软雅黑";
  color: #333333;
}
.wrap .main .right p span {
  font: 0.3rem/0.55rem "微软雅黑";
  color: #e3393a;
}
.van-cell {
  padding: 0px 16px;
}
</style>
