// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('swiper/dist/css/swiper.css')

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  error: require('@/assets/loading.gif'),
  loading: require('@/assets/loading.gif'),
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
