import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'amfe-flexible'
import './sass/common.sass'

// 按需引用
import { NavBar, Cell, CellGroup, List, DatetimePicker, ActionSheet, Icon } from 'vant'

Vue.use(NavBar)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(DatetimePicker)
  .use(ActionSheet)
  .use(Icon)

Vue.config.productionTip = false

// 配置axios
// eslint-disable-next-line
import api from './api/index.js'

Vue.prototype.$http = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
