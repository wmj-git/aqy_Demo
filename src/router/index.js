import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/homePage',
    component: () => import('@/views/homePage'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '',
    name: 'main_menu.route.home_page',
    meta: { title: 'main_menu.route.home_page', icon: 'dashboard', affix: false },
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'main_menu.route.account', icon: 'dashboard', affix: true }
      }]
  },
  {
    path: '/application',
    component: Layout,
    redirect: '',
    meta: { title: 'main_menu.route.application', icon: 'dashboard', affix: false },
    children: [
      {
        path: 'application-list',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta: { title: 'main_menu.route.application', icon: 'table' },
        children: [
          {
            path: 'application-list',
            component: () => import('@/views/dashboard/index'),
            name: 'dashboard',
            meta: { title: 'main_menu.route.application_list', icon: 'table' }
          }
        ]
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  // mode: 'history', // 去掉#
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
