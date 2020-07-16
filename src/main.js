// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Mint);
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios;
import http from './common/js/http'
import apis from './common/js/apis'
Vue.prototype.$http = http;
Vue.prototype.$apis = apis;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
