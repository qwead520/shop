import Vue from 'vue'
import Router from 'vue-router'
import vuex from 'vuex'
Vue.use(Router)
Vue.use(vuex)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/Index'], resolve)
    },
    {
      path: '/storelist', redirect: '/storelist/0'
    },
    {
      path: '/storelist/:id',
      name: 'StoreList',
      component: resolve => require(['@/components/StoreList'], resolve)
    },
    {
      path: '/mall', redirect: '/mall/0'
    },
    {
      path: '/mall/:id',
      name: 'Mall',
      component: resolve => require(['@/components/Mall'], resolve)
    },
    {
      path: '/footprint',
      name: 'Footprint',
      component: resolve => require(['@/components/Footprint'], resolve)
    },
    {
      path: '/user',
      name: 'User',
      component: resolve => require(['@/components/User'], resolve)
    },
    {
      path: '/store', redirect: '/storelist/1'
    },
    {
      path: '/store/:id',
      name: 'Store',
      component: resolve => require(['@/components/Store'], resolve)
    },
    {
      path: '/good/:id',
      name: 'Good',
      component: resolve => require(['@/components/Good'], resolve)
    },
    {
      path: '*',
      name: '404',
      redirect: '/'
    }
  ]
})
