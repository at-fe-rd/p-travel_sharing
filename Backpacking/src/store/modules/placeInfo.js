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
    state.place = payload
  }
}

const actions = {
  [types.FETCH_PLACE]: ({commit}, payload) => {
    Vue.http.get(`http://localhost:3000/places/${payload.id}`, {id: payload.id})
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
