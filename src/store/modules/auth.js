import axios from 'axios'
import router from '@/router'
import * as types from '../mutation-types'

const state = {
  isLoggedIn: localStorage.getItem('token') !== null,
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
}

const actions = {
  signin({ commit }, { email, password }) {
    axios
      .post('/auth/signin', {
        email,
        password,
      })
      .then(({ data }) => {
        commit(types.saveToken, {
          token: data.data.token,
        })
        commit('notify/info', 'Sign in success', { root: true })
        commit(types.signinSuccess)
      })
      .catch((err) => {
        commit('notify/error', err.response.data.message, { root: true })
      })
  },
  signup({ commit }, { name, email, password }) {
    axios
      .post('/auth/signup', {
        name,
        email,
        password,
      })
      .then(() => {
        commit('notify/info', 'Signup success. Please login', { root: true })
        commit(types.signupSuccess)
      })
      .catch((err) => {
        commit('notify/error', err.response.data.message, { root: true })
      })
  },
}

const mutations = {
  [types.signinSuccess](state) {
    state.isLoggedIn = true
    router.push({ name: 'myHome' })
  },
  [types.signupSuccess]() {
    router.push({ name: 'signin' })
  },
  [types.saveToken](state, { token }) {
    localStorage.setItem('token', `Bearer ${token}`)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  [types.signout](state) {
    localStorage.removeItem('token')
    axios.defaults.headers.common.Authorization = 'Bearer jwt'
    state.isLoggedIn = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
