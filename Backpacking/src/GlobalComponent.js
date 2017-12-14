import Loader from './components/ComponentGlobal/Loader.vue'
import Navbar from './components/ComponentGlobal/Navbar.vue'
import CropBox from './components/ComponentGlobal/CropBox.vue'
import Noti from './components/ComponentGlobal/Notification.vue'
import DropDown from './components/ComponentGlobal/DropDown.vue'
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
  }
}

export default GlobalComponents
