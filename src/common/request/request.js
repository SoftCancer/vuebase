// 封装请求工具类 request.js
import axios from 'axios' //引入 axios
import baseUrl from './baseUrl' //使用环境变量 + 模式的方式定义基础URL

// 创建 axios 实例
const instance_ax = axios.create({
  // baseURL: 'http://localhost:8081/', // api 的 base_url
  baseURL: baseUrl, // api 的 base_url
  // headers: {
    // 'token': Cookies.get('token')
  //   'Content-Type': 'application/json',
  //   'token': '123456789'
  // },
  timeout: 15000, // 请求超时时间
})

/*
  @ request 请求拦截器=>请求发出前处理
*/
instance_ax.interceptors.request.use(
  config => {
    //动态设置请求头
    // config.headers.token = Cookies.get('token');
    // config.headers.token = '1234567';
    if (config.method === 'post' || config.method === 'put') {
      //post请求时，序列化入参
      config.data = QS.stringify(config.data);
    }
    return config;
  }, error => {
    // 接口返回失败
    console.log(error.response);
    Promise.reject(error.response);
  }
)


/*
  @ request 响应拦截器=>处理响应数据
*/
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Toast({
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true
          });
          // 清除token
          localStorage.removeItem('token');
          store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          Toast({
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Toast({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true
          });
      }
      return Promise.reject(error.response);
    }
  }
);

export default instance_ax
