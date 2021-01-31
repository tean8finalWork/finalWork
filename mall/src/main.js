
//引入插件在这里注册

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mock from './mock';
import axios from 'axios';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

const g2plot = require('@antv/g2plot') // 1. 引入g2plot
Vue.prototype.$g2plot = g2plot // 2. 将g2plot挂载到vue中

Vue.config.productionTip = false

new Vue({
  router,
  Mock,
  render: h => h(App)
}).$mount('#app')
