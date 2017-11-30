import Gallery from './Gallery.vue'

const GalleryPlugin = {
  install (Vue) {
    Vue.component('gallery-box', Gallery)
  }
}

export default GalleryPlugin
