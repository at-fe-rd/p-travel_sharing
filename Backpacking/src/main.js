// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import GlobalComponents from './GlobalComponent'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/scss/main.scss'
import Gallery from './components/ComponentPlugin/GalleryPlugin'
import store from './store/store'

Vue.use(Vuex)
Vue.use(router)
Vue.use(Gallery)
Vue.use(VueResource)
Vue.use(GlobalComponents)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDBP7bsS6gD5Pe8ZS9esToRwiG4THL-FRQ',
    v: '3.26'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
