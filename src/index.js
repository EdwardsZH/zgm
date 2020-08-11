import Vue from 'vue'
import App from './App.vue'
import router from './router'

window._from = 'yjk-jssdk'; 
Vue.config.productionTip = false

window.vue = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
