import Vue from 'vue'
import App from './App'
import router from './router'
import normalize from 'normalize.css'

import Nav from './components/shared/Nav.vue'
import Info from './components/Info.vue'
import Stats from './components/Stats.vue'

Vue.config.productionTip = false
Vue.component('app-nav', Nav)
Vue.component('app-info', Info)
Vue.component('app-stats', Stats)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  normalize,
  render: h => h(App)
})
