// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

// 配置跨越携带cookie 和证书
axios.defaults.withCredentials = true
// 请求预处理
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

Vue.use(VueLazyload, {
  error : '',
  loading: '',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
