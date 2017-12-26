import SelectBox from './select-box.vue'

const selectBoxStore = {
  flagsCountry: [
    {
      country: 'EN',
      icon: 'flag-icon flag-icon-gb',
      lang: 'en'
    },
    {
      country: 'VN',
      icon: 'flag-icon flag-icon-vn',
      lang: 'vn'
    }
  ]
}

const SelectBoxPlugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          selectBoxStore: selectBoxStore
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$selectbox', {
      get () {
        return this.$root.selectBoxStore
      }
    })
    Vue.component('select-box', SelectBox)
  }
}

export default SelectBoxPlugin
