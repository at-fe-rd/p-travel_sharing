// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store'
import filter from './helper/filter'
import router from './router'
import VueResource from 'vue-resource'
import GlobalComponents from './GlobalComponent'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/styling/style.scss'
import Gallery from './components/ComponentPlugin/GalleryPlugin'
import SelectBox from './components/ComponentPlugin/SelectBoxPlugin'
import 'cropperjs/dist/cropper.css'
import VueI18n from 'vue-i18n'
import i18n from './locales/config'
import 'flag-icon-css/css/flag-icon.css'
import {VueMasonryPlugin} from 'vue-masonry'

Vue.use(VueMasonryPlugin)
Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(router)
Vue.use(Gallery)
Vue.use(SelectBox)
Vue.use(VueResource)
Vue.use(GlobalComponents)

Vue.http.options.root = process.env.SERVER_IP

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.MAP_KEY,
    v: process.env.MAP_VERSION
  }
})

// set header for all request
Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
Vue.http.headers.common['Uid'] = localStorage.getItem('UID')
Vue.http.headers.common['Provider'] = localStorage.getItem('PROVIDER')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  filter,
  template: '<App/>',
  components: { App }
})
