<template>
  <div>
    <div class="wrap">
      <!-- header -->
      <mt-header title="订单详细">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <div class="content">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
        <div class="items">
          <ul>
            <li>
              <van-card
                v-for="item of info"
                :key="item.id"
                :num="item.num"
                :price="item.price"
                :title="item.goodsname"
                :thumb="item.img"
              />
            </li>
            <li>
              <div>
                <p>配送方式：</p>
              </div>
              <span>xx快递</span>
            </li>
          </ul>
        </div>

        <div class="integral">
          <ul>
            <li>
              <span>优惠券</span>
              <span>无可用</span>
            </li>
            <li>
              <span>使用积分</span>
              <form action="#">
                <input type="text" placeholder="输入积分" />
                <input type="submit" value="使用" />
                <i>
                  可用
                  <em>50</em> 积分
                </i>
              </form>
            </li>
          </ul>
        </div>

        <footer>
          <ul>
            <li>
              <span>商品金额</span>
              <em>￥{{sum}}.00</em>
            </li>
            <li>
              <span>运费</span>
              <em>+￥0.00</em>
            </li>
            <li>
              <span>优惠券</span>
              <em>-￥0.00</em>
            </li>
            <li>
              <span>会员优惠</span>
              <em>-￥0.00</em>
            </li>
            <li>
              <span>积分抵扣</span>
              <em>-￥0.00</em>
            </li>
          </ul>
          <div>
            <p>
              实付金额：
              <span>￥{{sum}}.00</span>
            </p>
            <p>
              <a href="#">立即付款</a>
            </p>
          </div>
        </footer>
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
      num: 2,
      checked: true,
      allchecked: false,
      info: [],
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "北京市海淀区隐泉路青林苑6号楼中公优就业总部3层",
          isDefault: true,
        },
      ],
    };
  },
  mounted() {
    this.getcart();
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
          console.log(this.info);
        });
    },
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
  computed: {
    sum: function () {
      let sum = 0;
      this.info.map((item) => {
        if (item.status == true) {
          sum += item.price * item.num;
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
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
.van-card__content {
  width: 3.5rem;
}
.mint-header {
  background-color: #f26b11;
}
.van-address-list {
  padding: 12px 12px;
}
.wrap {
  background: #f1f1f1;
}
.content .items {
  margin-top: 0.21rem;
  background: #ffffff;
}
.content .items ul li {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0.27rem 0.31rem 0.3rem 0.27rem;
}
.content .items ul li div {
  display: flex;
  justify-content: space-between;
}
.content .items ul li div img {
  width: 1.03rem;
  height: 1.05rem;
}
.content .items ul li div p {
  font: 0.24rem "微软雅黑";
  color: #5f5f5f;
}
.content .items ul li div p em {
  color: #b5b5b5;
}
.content .items ul li .right div {
  margin-right: 0.5rem;
  width: 1.7rem;
  height: 0.57rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.22rem;
}
.content .items ul li .right div a {
  padding: 0 0.34rem 0 0.24rem;
  font: 0.26rem/0.58rem "微软雅黑";
  color: #454545;
  border: 0.01rem solid #454545;
  border-radius: 4px;
  margin-right: 0.09rem;
}
.content .items ul li .right div a:nth-child(2) {
  font: 0.26rem/0.58rem "微软雅黑";
  color: #454545;
  border: 0.01rem solid #454545;
  padding: 0 0.4rem 0 0.32rem;
}
.content .items ul li span {
  font: 0.36rem "微软雅黑";
  color: #e43931;
  margin: auto 0;
}
.content .items ul li:nth-child(3) {
  border-top: 1px solid #f0f0f0;
}
.content .items ul li:nth-child(3) span {
  font: 0.24rem "微软雅黑";
  color: #5f5f5f;
}
.content .integral {
  background: #ffffff;
  margin-top: 0.1rem;
}
.content .integral ul li {
  padding: 0 0.23rem;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
}
.content .integral ul li span {
  font: 0.24rem/1rem "微软雅黑";
  color: #6e6e6e;
}
.content .integral ul li input[type="text"] {
  width: 1.21rem;
  height: 0.72rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.07rem;
  padding-left: 0.28rem;
}
.content .integral ul li input[type="submit"] {
  margin-top: 0.05rem;
  width: 0.68rem;
  height: 0.72rem;
  border: 2px solid #f09018;
  border-radius: 0.07rem;
  padding-right: 0.08rem;
  font: 0.24rem "微软雅黑";
  color: #ffffff;
  background: #f26b11;
}
.content .integral ul li input[type="text"]::-webkit-input-placeholder {
  font: 0.24rem "微软雅黑";
  color: #e9e9e9;
}
.content .integral ul li i {
  font: 0.24rem "微软雅黑";
  color: #989898;
}
.content .integral ul li i em {
  color: #e2383b;
}
.content .integral ul li::nth-child(2) {
  border-top: 1px solid #f1f1f1;
}
.content footer {
  margin-top: 0.1rem;
  background: #ffffff;
  padding-bottom: 1rem;
}
.content footer ul li {
  padding: 0.22rem 0.23rem 0.18rem;
  display: flex;
  justify-content: space-between;
}
.content footer ul li span {
  font: 0.24rem/0.5rem "微软雅黑";
  color: #595959;
}
.content footer ul li em {
  font: 0.24rem/0.5rem "微软雅黑";
  color: #f33235;
}
.content footer div p {
  text-align: right;
  font: 0.36rem/1.25rem "微软雅黑";
  color: #626262;
  padding-right: 0.38rem;
}
.content footer div p span {
  color: #e4333d;
}
.content footer div p a {
  margin: 0 auto;
  width: 3.56rem;
  text-align: center;
  background: #f26b11;
  display: block;
  font: 0.3rem/0.8rem "微软雅黑";
  color: #ffffff;
  border-radius: 0.06rem;
}
</style>
