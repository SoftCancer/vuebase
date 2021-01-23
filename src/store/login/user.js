import { getRequest } from '../../common/request/httputil' //引入登录 api 接口

const user = {
  actions: {
    // 登录
    Login({ commit }, userInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
      const username = userInfo.username.trim()
      console.log("用户信息："+ JSON.stringify(userInfo))
      return new Promise((resolve, reject) => { //封装一个 Promise
        getRequest('login/spring', userInfo).then(response => { //使用 login 接口进行网络请求
          // commit('') //提交一个 mutation，
          console.log(response)
          resolve(response) //将结果封装进 Promise
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user
