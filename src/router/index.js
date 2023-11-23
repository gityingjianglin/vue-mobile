import Vue from 'vue'
import Router from 'vue-router'
import { getQueryString, pageUrl } from '@/utils/utils'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { checkUserCenterLogin } from '@/utils/userCenter'
import config from '@/config/config'
import Layout from '@/layout'
Vue.use(Router)

// 首页
const Home = (resolve) => {
  import('@/page/home/home').then((module) => {
    resolve(module)
  })
}

// 401
const error401 = (resolve) => {
  import('@/page/error/401').then((module) => {
    resolve(module)
  })
}

// test
const SinglePage = (resolve) => {
  import('@/page/singlePage/singlePage').then((module) => {
    resolve(module)
  })
}
let router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'layout',
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
          name: 'home',
          meta: {
            title: '首页',
            keepAlive: true
          }
        },
        {
          path: '/401',
          component: error401,
          name: '401',
          meta: { title: '401' }
        }
      ]
    },
    {
      path: '/single',
      name: 'single',
      meta: {
        title: 'single',
        keepAlive: true
      },
      component: SinglePage
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  if (getToken() || to.name === '401') {
    // token存在或者401路由无权限，可直接访问
    next()
  } else {
    if (config.openUserCenter) {
      // 账户中心对接开启，进行集团账户对接
      checkUserCenterLogin(next)
    } else {
      next()
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
}) */
const whiteList = ['/401']
function noToken(next, to) {
  console.log('没有token111111111111111111111111111')
  checkUserCenterLogin().then(() => {
    next()
  }, () => {
    next({
      path: '/401'
    })
  })
}
router.beforeEach((to, from, next) => {
  // 兼容Ihaier
  let isIhaier = /Lark/.test(navigator.userAgent)
  localStorage.setItem('client_userAgent', isIhaier)
  if ((to.name ===  '401' || (to.matched[0] && to.matched[0].path.slice(1)) === '401') && to.query.code) {
    next({
      path: '/'
    })
  }
  if (getToken()) {
    // token存在可直接访问
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else if (config.openUserCenter) {
      // 账户中心对接开启，进行集团账户对接
      if (isIhaier) {
        if (to.path !== '/home') {
          next({
            path: '/home'
          })
        } else {
          next()
          noToken(next, to)
        }
      } else {
        noToken(next, to)
      }
    } else {
      next()
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
})


export default router
