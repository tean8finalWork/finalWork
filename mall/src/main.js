
//引入插件在这里注册

import Vue from 'vue'
import App from './App.vue'
import router from './router'

const g2plot = require('@antv/g2plot') // 1. 引入g2plot
Vue.prototype.$g2plot = g2plot // 2. 将g2plot挂载到vue中

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
