import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  houses: [],
}

const getters = {
  houses: state => state.houses,
}

const actions = {
  getHouses({ commit }) {
    axios
      .get('/houses')
      .then(({ data }) => {
        commit(types.GET_ALLHOUSES_SUCCESS, {
          houses : data.data
        })
      })
      .catch(err => {

        console.log(err.response.data.message)
      })
  },
}

const mutations = {
  [types.GET_ALLHOUSES_SUCCESS](state,{houses}){
    state.houses = houses
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
