<template>
  <div>
    <router-view></router-view>
    <v-tab></v-tab>
  </div>
</template>

<script>
import vTab from '../views/Tabbar'
// import vHeader from '../views/Header'
export default {
  name: "",
  components: {
      vTab
  },
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
</style>
