// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




import Vue from 'vue'
import App from './App'
import router from './router'
import './icon'


// 完整引入 ElementUI
import ElementUI from 'element-ui'
//样式文件，需单独引入
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
