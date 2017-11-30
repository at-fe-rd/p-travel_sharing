import Loader from './components/ComponentGlobal/Loader.vue'
import Navbar from './components/ComponentGlobal/Navbar.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('loader-circle', Loader)
    Vue.component('navbar', Navbar)
  }
}

export default GlobalComponents
