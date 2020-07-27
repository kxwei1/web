<template>
  <div class="wrap">
    <!-- header -->
    <mt-header title="商品分类">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content">
      <!-- mian -->
      <div class="main">
        <div class="nav">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item
              v-for="item of firstList"
              :key="item.id"
              @click="cateChange(item.id)"
              :title="item.catename"
            />
          </van-sidebar>
        </div>
        <div class="list">
          <div class="items">
            <footer>
              <van-grid :column-num="3" icon-size="1.16rem">
                <van-grid-item
                  v-for="item in secondCates"
                  :key="item.id"
                  :icon="item.img"
                  :text="item.catename"
                  @click="switchTab(item.id)"
                />
              </van-grid>
            </footer>
          </div>
        </div>
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
      firstList: [],
      secondCates: [],
      thirdCates: [],
      activeKey: 0,
    };
  },
  mounted() {
    this.$http.get(this.$apis.cateslist, { pid: 17 }).then((res) => {
      this.secondCates = res.list;
      console.log(res);
    });
    this.$http.get(this.$apis.cateslist, { pid: 18 }).then((res) => {
      this.thirdCates = res.list;
    });
    this.$axios.get("/api/catelist").then((res) => {
      this.firstList = res.data.list;
    });
  },
  methods: {
    switchTab(pid) {
      this.$router.push("/list/" + pid);
    },
    cateChange(e) {
      if (e == "") {
        return false;
      } else {
        this.$http.get(this.$apis.cateslist, { pid: e }).then((res) => {
          this.secondCates = res.list;
          console.log(res);
        });
      }
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
.van-sidebar {
  width: 100%;
}
html,
body {
  height: 100%;
}
.mint-header {
  background-color: #f26b11;
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
  height: 100%;
  display: flex;
}
.main .nav {
  width: 1.63rem;
  border-right: 0.01rem solid #d9d9d9;
}
.main .nav ul {
  padding-top: 0.4rem;
}
.main .nav ul li {
  padding-left: 0.3rem;
  padding-right: 0.2rem;
  border-left: 0.08rem solid transparent;
  margin-bottom: 0.61rem;
}
.main .nav ul li:nth-child(1) {
  border-left: 0.08rem solid #f26b11;
}
.main .nav ul li:nth-child(1) a {
  color: #f26b11;
}
.main .nav ul li a {
  font: 0.26rem/0.52rem "微软雅黑";
  color: #666666;
}
.main .list {
  height: 100%;
  padding: 0.15rem 0.3rem 0 0.26rem;
  width: 4.4rem;
}
.main .list .items header {
  display: flex;
  justify-content: space-between;
}
.main .list .items header span {
  font: 0.26rem/1.04rem "微软雅黑";
  color: #454545;
}
.main .list .items a {
  display: block;
}
.main .list .items footer ul {
  display: flex;
}
.main .list .items footer ul li {
  text-align: center;
  margin-right: 0.35rem;
  margin-top: 0.14rem;
}
.main .list .items footer ul li a img {
  width: 1.16rem;
  height: 1.24rem;
  margin-bottom: 0.1rem;
}
.main .list .items footer ul li p a {
  font: 0.2rem/0.67rem "微软雅黑";
  color: #878787;
}
</style>
