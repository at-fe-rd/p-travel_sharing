import * as types from './types'

export default {
  [types.MUTATE_SET_NOTI_STATUS]: (state, payload) => {
    state.notiStatus = payload
    setTimeout(() => {
      state.notiStatus = {status: null, message: ''}
    }, 3000)
  }
}
