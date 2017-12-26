import Vue from 'vue'
import Vuex from 'vuex'
import navigator from './modules/navigator'
import newsFeed from './modules/newsFeed'
import locationFinder from './modules/locationFinder'
import postActions from './modules/postActions'
import placeInfo from './modules/placeInfo'
import auth from './modules/auth'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notiStatus: {status: null, message: ''}
  },
  getters,
  actions,
  mutations,
  modules: {
    auth,
    navigator,
    locationFinder,
    placeInfo,
    newsFeed,
    postActions
  }
})
