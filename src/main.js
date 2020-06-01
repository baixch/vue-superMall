import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/common.css'
import toast from "components/commons/toast"
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(toast)
Vue.use(VueLazyload, {
  loading: require("assets/logo.png")
})
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


