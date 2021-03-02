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
    redirect: '/dashboard',
    meta: { title: '首页', icon: 'dashboard', affix: false },
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '我的账户', icon: 'dashboard', affix: true }
      },
      {
        path: 'account',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '应用管理', icon: 'table' },
        alwaysShow: true,
        children: [
          {
            path: 'application-list',
            component: () => import('@/views/dashboard/index'),
            name: 'dashboard',
            meta: { title: '应用列表', icon: 'table' }
          }
        ]
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history', // 去掉#
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
