import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'


Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  //removes the # tag
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
