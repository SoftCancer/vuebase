import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  //配置默认的路径，默认显示登录页
  { path: '/', component: () => import('@/views/login/login')},

  //配置登录成功页面，使用时需要使用 path 路径来实现跳转
  { path: '/success', component: () => import('@/views/login/success')},

  //配置登录失败页面，使用时需要使用 path 路径来实现跳转
  { path: '/error', component: () => import('@/views/login/error'), hidden: true }
]

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ],
// mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap //指定路由列表

})
