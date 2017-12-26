import * as types from '../types'
import Vue from 'vue'
import router from '../../router'

const state = {
  comments: [],
  post: {}
}

const getters = {
  [types.COMMENTS]: state => {
    return state.comments
  },
  [types.POST]: state => {
    return state.post
  },
  [types.COMMENTS]: state => {
    return state.comments
  }
}

const mutations = {
  [types.MUTATE_CREATE_POST]: (state, payload) => {
    state.posts.push(payload.post)
  },
  [types.MUTATE_CREATE_COMMENT]: (state, payload) => {
    state.comments.push(payload.comment)
    console.log(12)
  },
  [types.MUTATE_GET_COMMENTS]: (state, payload) => {
    state.comments = payload.comments
  },
  [types.MUTATE_SHOW_POST]: (state, payload) => {
    state.post = payload.post
    state.comments = payload.comments
  }
}

const actions = {
  [types.CREATE_POST]: ({commit}, payload) => {
    const formData = new FormData()
    formData.append('file', payload.img)
    formData.append('content', payload.content)
    formData.append('hashtag', payload.hashtag)
    Vue.http.post('posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setTimeout(() => { router.push({name: 'NewsFeed'}) }, 2000)
      commit(types.MUTATE_CREATE_POST, response.body)
    }, function (error) {
      console.log(error)
    })
  },
  // [types.GET_COMMENTS]: ({commit}, payload) => {
  //   Vue.http.get('comments')
  //   .then(response => {
  //     commit(types.MUTATE_GET_ALL_POSTS, response.body)
  //   }, function (err) {
  //     console.log(err)
  //   })
  // }
  [types.CREATE_COMMENT]: ({commit}, payload) => {
    Vue.http.post('comments', payload)
    .then(response => {
      console.log(response.body)
      commit(types.MUTATE_CREATE_COMMENT, response.body)
    }, function (err) {
      console.log(err)
    })
  },
  [types.SHOW_POST]: ({commit}, payload) => {
    console.log(payload)
    Vue.http.get(`posts/${payload}`)
    .then(response => {
      console.log(response.body)
      commit(types.MUTATE_SHOW_POST, response.body)
    }, function (err) {
      console.log(err)
    })
  },
  [types.LIKE]: ({commit}, payload) => {
    Vue.http.post(`posts/likes`, payload)
    .then(response => {
      console.log(response.body)
      commit(types.MUTATE_LIKE, response.body)
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
