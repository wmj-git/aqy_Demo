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
    redirect: '/tabledata',
    children: [{
      path: 'slide-logo',
      name: '',
      component: () => import('@/views/slide-logo/slide-logo'),
      meta: { title: '', icon: ''}
    }]
  },
  {
    path: '/tabledata',
    component: Layout,
    redirect: '/tabledata/account',
    name: 'tabledata',
    alwaysShow: true,
    meta: {
      title: '首页',
      icon: 'table'
    },
    children: [
      {
        path: 'account',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta: { title: '我的账户', icon: 'table' }
      },
      {
        path: 'application-manage',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
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
