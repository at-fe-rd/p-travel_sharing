import Loader from './components/ComponentGlobal/loader.vue'
import Navbar from './components/ComponentGlobal/navbar.vue'
import CropBox from './components/ComponentGlobal/crop-box.vue'
import Noti from './components/ComponentGlobal/notification.vue'
import DropDown from './components/ComponentGlobal/drop-down.vue'
import Loading8 from './components/ComponentGlobal/loading-8.vue'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('loader-circle', Loader)
    Vue.component('navbar', Navbar)
    Vue.component('crop-box', CropBox)
    Vue.component('noti', Noti)
    Vue.component('drop-down', DropDown)
    Vue.component('loading-8', Loading8)
  }
}

export default GlobalComponents
