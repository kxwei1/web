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
        v-model="info.username"
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
        username: "",
        password: "",
        nickname: "",
      },
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      this.$router.push("/login");
      Toast("登陆");
    },
    onSubmit(values) {
      this.$refs[values].validate((valid) => {
        if (valid) {
          let data = JSON.parse(JSON.stringify(this.info));
          data.status = data.status ? 1 : 2;
          let arr = [];
          this.specaAttrs.map((item) => {
            arr.push(item.value);
          });
          data.attrs = arr ? arr.join(",") : "";
          let url = this.$apis.specsadd;
          if (this.$route.params.specsid) {
            (url = this.$apis.specsedit),
              (data.id = this.$route.params.specsid);
          }
          this.$http.post(url, data).then((res) => {
            if (res.code == 200) {
              this.$router.push("/specs");
            } else {
              alert(1);
            }
          });
        }
      });
      this.$router.push("/home");
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
</style>
