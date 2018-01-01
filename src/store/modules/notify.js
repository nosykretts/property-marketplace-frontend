const state = {
  message: '',
  type: '',
}

const getters = {
  message: state => state.message,
  type: state => state.type,
}

const mutations = {
  info(state, message) {
    state.message = message
    state.type = 'info'
  },
  success(state, message) {
    state.message = message
    state.type = 'success'
  },
  warning(state, message) {
    ;(state.message = message), (state.type = 'warning')
  },
  error(state, message) {
    state.message = message
    state.type = 'error'
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
