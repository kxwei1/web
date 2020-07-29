<template>
  <div>
    <van-nav-bar
      title="登陆"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form class="box" @submit="onSubmit">
      <van-field
        v-model="info.phone"
        name="用户名"
        label="手机号"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="info.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登陆</van-button>
      </div>
      <div class="info">
        <van-button to="/register" plain type="info">已有账号?去登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapActions } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {
      info: {
        phone: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["setAdminUserSync"]),

    switchTab(i) {
      this.$router.push(i);
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      this.$router.push("/register");
      Toast("注册");
    },
    onSubmit() {
      this.$http.post(this.$apis.login, this.info).then((res) => {
        if (res.code == 200) {
          this.setAdminUserSync(res.list)
          // this.info = {
          //   phone: "",
          //   password: "",
          // };
          // sessionStorage.setItem("userInfo", JSON.stringify(res.list));
          this.$router.push("/home");
        } else {
          alert("注册失败");
        }
      });
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
.box {
  margin-top: 4rem;
}
.info {
  width: 100%;
  text-align: center;
}
</style>
