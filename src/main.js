// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
// import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import './assets/css/common.css'
const infiniteScroll = require('vue-infinite-scroll')
Vue.use(vuex)
Vue.use(infiniteScroll)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('@/assets/loading.gif'),
  loading: require('@/assets/loading.gif'),
  attempt: 1
})
var store = new vuex.Store({

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  template: '<keep-alive><router-view /></keep-alive>'
})
