import * as types from './types'

export default {
  [types.SET_NOTI_STATUS]: ({commit}, payload) => {
    console.log(payload)
    commit(types.MUTATE_SET_NOTI_STATUS, payload)
  }
}
