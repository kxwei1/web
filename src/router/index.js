import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../components/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('../components/Register.vue'),
    },
    {
      path: '/',
      component: () => import('../components/pages/Index'),
      children: [
        {
          path: 'home',
          component: () => import('../components/pages/Home'),
        },
        {
          path: 'my',
          component: () => import('../components/pages/My'),
        },
        {
          path: 'cart',
          component: () => import('../components/pages/Cart'),
        },
        {
          path: 'sort',
          component: () => import('../components/pages/Sort'),
        },
        {
          path: 'list',
          component: () => import('../components/pages/List'),
        },
        {
          path: 'list/:id',
          component: () => import('../components/pages/List'),
        },
        {
          path: 'detailed',
          component: () => import('../components/pages/Detailed'),
        },
        {
          path: 'confirm',
          component: () => import('../components/pages/Confirm.vue'),
        },
        {
          path: 'detailed/:id',
          component: () => import('../components/pages/Detailed'),
        },
        {
          path: '',
          redirect: 'home'
        }
      ],
    },
    

  ]
})
