import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import axios from 'axios'//全局引入axios
Vue.prototype.$axios = axios//将axios挂载到Vue原型上，我们创建的所有的组件都继承这个原型
console.log(process.env.VUE_APP_URL)
axios.defaults.baseURL = process.env.VUE_APP_URL;//设置axios默认请求路径，其他process.env.VUR_APP_URL保存的是开发这个项目时的默认路径，参考https://cli.vuejs.org/guide/mode-and-env.html#modes

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
