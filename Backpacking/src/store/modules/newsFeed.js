import * as types from '../types'
import Vue from 'vue'

const state = {
  status: '',
  posts: []
}

const getters = {
  [types.GET_STATUS]: state => {
    return state.status
  },
  [types.POSTS]: state => {
    return state.posts
  }
}

const mutations = {
  [types.MUTATE_GET_ALL_POSTS]: (state, payload) => {
    state.posts = payload.posts
  }
}

const actions = {
  [types.GET_ALL_POSTS]: ({commit}, payload) => {
    Vue.http.get('posts')
    .then(response => {
      commit(types.MUTATE_GET_ALL_POSTS, response.body)
    }, function (err) {
      console.log(err)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
