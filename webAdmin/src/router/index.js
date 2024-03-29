import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/singUp',
      name: 'singUP',
      component: () => import('../views/SingUpOrg.vue')
    },
    {
      path: '/banOrg',
      name: 'banOrg',
      component: () => import('../views/BanOrg.vue')
    },
    {
      path: '/Review',
      name: 'Review',
      component: () => import('../views/OrgPendents.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/CRUDEsdeveniment.vue')
    },
    {
      path: '/qrValidator',
      name: 'qrValidator',
      component: () => import('../views/QREsdeveniment.vue')
    },
    {
      path: '/checkin/:id_entrada',
      name: 'qrCheckin',
      component: () => import('../views/QRCheckin.vue')
    },
  ]
})

export default router
