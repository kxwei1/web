<template>
  <van-form class="box" @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">登陆</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        username: '',
      password: '',
    };
  },
  mounted() {},
  methods: {
      onSubmit(values) {
      console.log('submit', values);
      this.$router.push('/home');
    },
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
.box{
    margin-top: 4rem;
}
</style>
