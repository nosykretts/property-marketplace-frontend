import axios from 'axios'
import router from '@/router'
import * as types from '../mutation-types'

const state = {
  errorMessage: null,
  isLoggedIn: localStorage.getItem('token') !== null ? true : false,
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
}

const actions = {
  login({ commit }, { email, password }) {
    axios
      .post('/auth/signin', {
        email,
        password,
      })
      .then(({ data }) => {
        commit(types.SAVE_TOKEN, {
          token: data.data.token,
        })
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  register({ commit }, { name, email, password }) {
    axios
      .post('/auth/signup', {
        name,
        email,
        password,
      })
      .then(() => {
        commit(types.NOTIFY_INFO, 'Register success. Please login')
        commit(types.USER_SIGNUP_SUCCESS)
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
}

const mutations = {
  [types.SAVE_TOKEN](state, { token }) {
    console.log('save token berhasil')
    state.isLoggedIn = true
    localStorage.setItem('token', 'Bearer ' + token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    router.push({ name: 'todoPage' })
  },
  [types.SIGNIN_FAILURE](state, { message }) {
  },
  [types.USER_SIGNUP_SUCCESS](state) {
    router.push({name: 'loginPage'})
  },
  [types.USER_LOGOUT](state) {
    localStorage.removeItem('token')
    state.isLoggedIn = false
    axios.defaults.headers.common['Authorization'] = 'Bearer jwt'
    router.push({ name: 'loginPage' })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
