import Vue from 'vue'
import Router from 'vue-router'
import success from '@/views/login/success'
import home from '@/views/home/home'

Vue.use(Router)

/**
 * 路由
 * @Description:
 * @Author: YaoGX
 * @Date: 2021/1/24 16:52
 **/
export const constantRouterMap = [
  //配置默认的路径，默认显示登录页
  { path: '/', component: () => import('@/views/login/login')},

  //配置登录成功页面，使用时需要使用 path 路径来实现跳转,
  // component:success 的实现还可以使用 ：component: () => import('@/views/login/success')
  { path: '/success', component: success},
  { path: '/home', component: home},

  //配置登录失败页面，使用时需要使用 path 路径来实现跳转
  { path: '/error', component: () => import('@/views/login/error'), hidden: true }
]

// 创建一个 Router 实例
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
