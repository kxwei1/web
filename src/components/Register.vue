<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      right-text="登陆"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form class="box" @submit="onSubmit">
      <van-field
        v-model="info.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="info.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
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
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
      <div class="info">
        <van-button to="/login" plain type="info">已有账号?去登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  props: {},
  data() {
    return {
      info: {
        phone: "",
        password: "",
        nickname: "",
      },
    };
  },
  mounted() {},
  methods: {
    switchTab(i) {
      this.$router.push(i);
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      this.$router.push("/login");
      Toast("登陆");
    },
    onSubmit() {
      this.$http.post(this.$apis.register, this.info).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.$router.push("/login");
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
