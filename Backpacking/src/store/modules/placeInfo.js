import * as types from '../types'
import Vue from 'vue'

const state = {
  place: {}
}

const getters = {
  [types.PLACE]: state => {
    return state.place
  }
}

const mutations = {
  [types.MUTATE_FETCH_PLACE]: (state, payload) => {
    state.place = payload[0]
  }
}

const actions = {
  [types.FETCH_PLACE]: ({commit}, payload) => {
    Vue.http.get('http://localhost:3000/locations/place', {params: payload})
    .then(response => {
      commit(types.MUTATE_FETCH_PLACE, response.body.place)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
