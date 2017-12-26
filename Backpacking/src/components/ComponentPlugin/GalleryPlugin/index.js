import Gallery from './gallery.vue'

const GalleryPlugin = {
  install (Vue) {
    Vue.component('gallery-box', Gallery)
  }
}

export default GalleryPlugin
