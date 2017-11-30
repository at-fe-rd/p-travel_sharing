import Vue from 'vue'
import Vuex from 'vuex'
import navigator from './modules/navigator'
import locationFinder from './modules/locationFinder'
import placeInfo from './modules/placeInfo'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    navigator,
    locationFinder,
    placeInfo
  }
})
