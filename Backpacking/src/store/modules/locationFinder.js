import * as types from '../types'
import Vue from 'vue'

const state = {
  locations: {}
}

const getters = {
  [types.LOCATIONS]: state => {
    return state.locations
  }
}

const mutations = {
  [types.MUTATE_FETCH_LOCATIONS]: (state, payload) => {
    state.locations = payload
  }
}

const actions = {
  [types.FETCH_LOCATIONS]: ({commit}, payload) => {
    Vue.http.get('locations', {params: payload})
    .then(response => {
      commit(types.MUTATE_FETCH_LOCATIONS, response.body.locations)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
