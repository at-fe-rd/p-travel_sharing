import * as types from '../types'
import Vue from 'vue'

const state = {
  token: '',
  currentUser: null,
  connected: {status: '', provider: ''}
}
const getters = {
  [types.TOKEN]: state => {
    return state.token
  },
  [types.CURRENT_USER]: state => {
    return state.currentUser
  },
  [types.CONNECTED]: state => {
    return state.connected
  }
}

const mutations = {
  [types.MUTATE_CREATE_USER]: (state, payload) => {
    return state
  },
  [types.MUTATE_LOG_IN]: (state, payload) => {
    // return state = payload.user
  },
  [types.MUTATE_SET_CONNECTION]: (state, payload) => {
    state.connected = payload
  },
  [types.MUTATE_SET_CURRENT_USER]: (state, payload) => {
    state.currentUser = payload.user
    localStorage.setItem('ACCESS_TOKEN', payload.token)
    localStorage.setItem('UID', payload.uid)
    localStorage.setItem('PROVIDER', payload.provider)
  }
}

const actions = {
  [types.CREATE_USER]: ({commit}, payload) => {
    Vue.http.post('users', payload)
    .then(response => {
      commit(types.MUTATE_CREATE_USER, response.body)
    })
  },
  [types.CHECK_LOGIN]: ({commit}, payload) => {
    Vue.http.get('sessions/show')
    .then(response => {
      console.log(response.headers)
      commit(types.MUTATE_SET_CURRENT_USER, {token: response.headers.map['access-token'][0], uid: response.headers.map['uid'][0], provider: response.headers.map['provider'][0], user: response.body.user})
    })
  },
  [types.SET_CURRENT_USER]: ({commit}, payload) => {
    commit(types.MUTATE_SET_CURRENT_USER, payload)
  },
  [types.LOG_IN]: ({commit}, payload) => {
    Vue.http.post('sessions', payload)
    .then(response => {
      commit(types.MUTATE_SET_CONNECTION, {status: true, provider: 'email'})
      commit(types.MUTATE_SET_CURRENT_USER, {token: response.headers.map['access-token'][0], uid: response.headers.map['uid'][0], provider: response.headers.map['provider'][0], user: response.body.user})
    })
    .catch(function (e) {
      if (e.status === 401) {
        commit(types.MUTATE_SET_NOTI_STATUS, {status: 1, message: 'Your username or password are not right!'})
      }
    })
  },
  [types.LOG_OUT]: ({commit}, payload) => {
    Vue.http.delete('sessions/destroy')
    .then(response => {
      commit(types.MUTATE_SET_CURRENT_USER, {user: {}, uid: '', access_token: '', provider: ''})
    })
  },
  [types.SET_CONNECTION]: ({commit}, payload) => {
    commit(types.MUTATE_SET_CONNECTION, payload)
  },
  [types.GET_FACEBOOK_USER]: ({commit}, payload) => {
    Vue.http.get('auth/facebook', {params: payload})
    .then(response => {
      if (response.status === 200) {
        commit(types.MUTATE_SET_CURRENT_USER, response.body.user)
        commit(types.MUTATE_SET_NOTI_STATUS, {status: 0, message: 'Login by your Facebook account successful!'})
      }
    })
    .catch(function (e) {
      commit(types.MUTATE_SET_NOTI_STATUS, {status: 1, message: 'Cannot login!'})
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
