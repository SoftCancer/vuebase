import Vue from 'vue' //引入 Vue
import Vuex from 'vuex' //引入 Vuex
import user from './user' //引入 user.js

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user //使用 user.js 中的 action
  }
})

export default store
