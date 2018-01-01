import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  houses: [],
  house : {}
}

const getters = {
  houses: state => state.houses,
  house : state => state.house
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
  getHouse({commit}, {id}) {
    axios
    .get(`houses/${id}`)
    .then(({ data }) => {
      commit(types.getHouseSuccess, {
        house : data.data
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
  }
}

const mutations = {
  [types.GET_ALLHOUSES_SUCCESS](state,{houses}){
    state.houses = houses
  },
  [types.getHouseSuccess](state, {house}){
    state.house = house
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
