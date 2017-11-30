import * as types from '../types'

const state = {
  yourLocation: {},
  center: {lat: 0, lng: 0},
  zoomIndex: 2,
  loadingCompleted: false
}
const getters = {
  [types.YOUR_LOCATION]: state => {
    return state.yourLocation
  },
  [types.YOUR_CENTER]: state => {
    return state.center
  },
  [types.YOUR_ZOOM]: state => {
    return state.zoomIndex
  },
  [types.LOADING_COMPLETED]: state => {
    return state.loadingCompleted
  }
}

const mutations = {
  [types.MUTATE_FIND_YOUR_LOCATION]: (state, payload) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }
        state.yourLocation = pos
        state.center = pos.position
        state.zoomIndex = 14
        state.loadingCompleted = true
      })
    }
  }
}

const actions = {
  [types.FIND_YOUR_LOCATION]: ({commit}, payload) => {
    commit(types.MUTATE_FIND_YOUR_LOCATION, payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
