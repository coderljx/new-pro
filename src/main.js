import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "../src/router/index"
import store from "../src/store/store"
import VCharts from 'v-charts'
import axios from "../src/axios/axios"
Vue.use(ElementUI)
Vue.use(VCharts);
Vue.use(axios);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
  // 全局挂载, 可以在任何组件使用
  render: h => h(App),
  router,
  axios,
  store
}).$mount('#app')



