import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/pages/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "signup" */ '@/pages/Signup.vue')
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})

export default router;