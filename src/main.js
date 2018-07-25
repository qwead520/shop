// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('swiper/dist/css/swiper.css')

Vue.use(vuex)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('@/assets/loading.gif'),
  loading: require('@/assets/loading.gif'),
  attempt: 1
})
var store = new vuex.Store({
  state: {
    footerShow: true
  },
  mutations: {
    setFooter (state, flag) {
      state.footerShow = flag
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
