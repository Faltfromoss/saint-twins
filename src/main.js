import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import M from 'materialize-css/dist/js/materialize.min'

Vue.prototype.$M = M
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
