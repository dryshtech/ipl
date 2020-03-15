import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdRipple, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

Vue.use(MdButton)
Vue.use(MdRipple)
Vue.use(MdCard)

import store from './store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
