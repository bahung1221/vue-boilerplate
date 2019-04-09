import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/containers/login/Index.vue'),
    },
    {
      path: '/',
      component: () => import('@/containers/home/HomeWrapper.vue'),
      children: [
        {
          path: '',
          component: () => import('@/containers/home/Index.vue'),
        },
      ],
    },
  ],
})
