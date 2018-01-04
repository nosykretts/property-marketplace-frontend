import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  houses: [],
  myHouses : [],
  house : {},
}

const getters = {
  houses: state => state.houses,
  myHouses: state => state.myHouses,
  house : state => state.house,
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
  getMyHouses ({commit}) {
  
    axios
      .get('/user/houses')
      .then(({ data }) => {
        commit(types.getMyHousesSuccess, {
          houses : data.data
        })  
      })
      .catch(err => {
        console.log(err.response.data.message)
      })    
  },
  createHouse({commit}, p){
    let formData = new FormData()


    p.photos.fileList.forEach(file => {
      formData.append('newPhotos', file)
    })

    axios
    .post('/user/houses', formData)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err.response.data.message)
    }) 
  },
  getHouse({commit}, {id}) {
    return new Promise((resolve, reject) => {
        axios
        .get(`houses/${id}`)
        .then(({ data }) => {
          commit(types.getHouseSuccess, {
            house : data.data
          })
          resolve(data.data)
        })
        .catch(err => {
          console.log(err.response.data.message)
          reject(err)
        })      
    })    

  }
}

const mutations = {
  [types.GET_ALLHOUSES_SUCCESS](state,{houses}){
    state.houses = houses
  },
  [types.getMyHousesSuccess](state, {houses}){
    state.myHouses = houses
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
