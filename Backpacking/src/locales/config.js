import Vue from 'vue'
import VueI18n from 'vue-i18n'

// /**
//  * Import Language
//  */
import en from './i18n/en_US.js'
import vn from './i18n/vn_VN'

// /**
//  * Config
//  */
Vue.use(VueI18n)
// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en',
  messages: {
    en: {
      lang: en
    },
    vn: {
      lang: vn
    }
  }
})
