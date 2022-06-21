import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins' // plugins
import router from './router'
import store from './store'
import filters from './assets/filter/filter.js'
import VConsole from 'vconsole'
import vant from './uiConfig/vant'
// import ECharts modules manually to reduce bundle size

Vue.use(vant)
Vue.use(plugins)
console.log(process)
if (process.env.VUE_APP_ENV === 'sit' || process.env.VUE_APP_ENV === 'development') {
  let vconsole = new VConsole()
  console.log(vconsole)
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// register globally (or you can do it locally)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
