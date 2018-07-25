import Vue from 'vue'
import Router from 'vue-router'
import vuex from 'vuex'
import Index from '@/components/Index'
import StoreList from '@/components/StoreList'
import Mall from '@/components/Mall'
import Footprint from '@/components/Footprint'
import User from '@/components/User'
import Store from '@/components/Store'
import Good from '@/components/Good'
Vue.use(Router)
Vue.use(vuex)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/storelist/:id',
      name: 'StoreList',
      component: StoreList
    },
    {
      path: '/mall/:id',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/footprint',
      name: 'Footprint',
      component: Footprint
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/store/:id',
      name: 'Store',
      component: Store
    },
    {
      path: '/good/:id',
      name: 'Good',
      component: Good,
      beforeEnter: (to, from, next) => {
        this.$store.commit('setFooter', false)
        next()
      }
    }
  ]
})
