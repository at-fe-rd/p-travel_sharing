import * as types from '../types'
import Vue from 'vue'

const state = {
  status: ''
}

const getters = {
  [types.GET_STATUS]: state => {
    return state.status
  }
}

const mutations = {
  [types.MUTATE_CREATE_POST]: (state, payload) => {
    console.log(payload)
  }
}

const actions = {
  [types.CREATE_POST]: ({commit}, payload) => {
    const formData = new FormData()
    formData.append('file', payload.img)
    formData.append('content', payload.content)
    Vue.http.post('posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response)
    }, function (error) {
      console.log(error)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
