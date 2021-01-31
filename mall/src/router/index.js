import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/',
    name: 'Start',
    component: () => import(/* webpackChunkName: "about" */ '../views/Start.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue'),
    children: [
        {
          //默认展示的是店铺数据
          path: '/info',
          redirect: '/info/good',
        },
        {
          path: '/info/store',
          name: 'Store',
          component: () => import('../views/Store.vue'),
          meta:{
            title:'店铺信息'
          },
        },
      {
        path: '/info/good',
        name: 'Good',
        component:() => import('../views/Good.vue'),
        meta:{
          title:'商品信息'
        },
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
