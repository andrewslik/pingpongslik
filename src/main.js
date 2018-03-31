import Vue from 'vue'
import App from './App'
import router from './router'
import normalize from 'normalize.css'
import bulma from 'bulma'

import Nav from './components/shared/Nav.vue'
import Info from './components/Info.vue'
import Stats from './components/Stats.vue'
import Footer from './components/shared/Footer.vue'
import Hero from './components/Hero.vue'
import Leaderboard from './components/Leaderboard.vue'
import Profile from './components/Profile.vue'

Vue.config.productionTip = false
Vue.component('app-nav', Nav)
Vue.component('app-info', Info)
Vue.component('app-stats', Stats)
Vue.component('app-footer', Footer)
Vue.component('app-hero', Hero)
Vue.component('app-leaderboard', Leaderboard)
Vue.component('app-profile', Profile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  normalize,
  bulma,
  render: h => h(App)
})
