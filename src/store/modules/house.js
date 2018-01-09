import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  houses: [],
  myHouses: [],
  house: null,
  search: {},
}

const getters = {
  houses: state => state.houses,
  myHouses: state => state.myHouses,
  house: state => state.house,
  search: state => state.search,
}

function formToFormData(p) {
  const fd = new FormData()
  fd.append('title', p.title)
  fd.append('description', p.description)
  fd.append('price', p.price)
  fd.append('certification', p.certification)
  fd.append('surfaceArea', p.surfaceArea)
  fd.append('buildingArea', p.buildingArea)
  fd.append('floorCount', p.floorCount)
  fd.append('roomCount', p.roomCount)
  fd.append('toiletCount', p.toiletCount)
  fd.append('maidRoomCount', p.maidRoomCount)
  fd.append('garageCount', p.garageCount)
  fd.append('carportCount', p.carportCount)
  fd.append('longitude', p.coordsAddress.coordinates[0])
  fd.append('latitude', p.coordsAddress.coordinates[1])
  fd.append('address', p.coordsAddress.address)
  fd.append('contactName', p.contact.name)
  fd.append('contactPhoneNumber', p.contact.phoneNumber)
  p.facilities.forEach((facility) => {
    fd.append('facilities', facility)
  })
  p.photosFileList.photos.forEach((photo) => {
    fd.append('photos', photo)
  })
  p.photosFileList.fileList.forEach((file) => {
    fd.append('newPhotos', file)
  })
  return fd
}

const actions = {
  getHouses({ commit }, { search }) {
    const urlQuery = search ? `/houses?search=${search}` : '/houses'
    axios
      .get(urlQuery)
      .then(({ data }) => {
        commit(types.GET_ALLHOUSES_SUCCESS, {
          houses: data.data,
        })
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  },
  // searchHouses({commit} , {search}){
  //   axios
  //     .get('/houses?search=' + search)
  //     .then(({data}) => {
  //       commit(types.GET_ALLHOUSES_SUCCESS, {
  //         houses : data.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err.response.data.message)
  //     })
  // },
  getMyHouses({ commit }) {
    axios
      .get('/user/houses')
      .then(({ data }) => {
        commit(types.getMyHousesSuccess, {
          houses: data.data,
        })
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  },
  createHouse({ commit }, { form }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/user/houses', formToFormData(form))
        .then(({ data }) => {
          commit(types.createHouseSuccess, {
            house: data.data,
          })
          resolve()
        })
        .catch((err) => {
          console.log(err.response.data.message)
          reject()
        })
    })
  },
  editHouse({ commit }, { id, form }) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/user/houses/${id}`, formToFormData(form))
        .then(({ data }) => {
          commit(types.updateHouseSuccess, {
            house: data.data,
          })
          resolve()
        })
        .catch((err) => {
          console.log(err.response.data.message)
          reject()
        })
    })
  },
  deleteHouse({ commit }, { id }) {
    axios
      .delete(`/user/houses/${id}`)
      .then(() => {
        commit(types.deleteHouseSuccess, { id })
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  },
  getHouse({ commit }, { id }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`houses/${id}`)
        .then(({ data }) => {
          commit(types.getHouseSuccess, {
            house: data.data,
          })
          resolve(data.data)
        })
        .catch((err) => {
          console.log(err.response.data.message)
          reject(err)
        })
    })
  },
}

const mutations = {
  [types.GET_ALLHOUSES_SUCCESS](state, { houses }) {
    state.houses = houses
  },
  [types.getMyHousesSuccess](state, { houses }) {
    state.myHouses = houses
  },
  [types.getHouseSuccess](state, { house }) {
    state.house = house
  },
  [types.createHouseSuccess](state, { house }) {
    state.house = house
  },
  [types.updateHouseSuccess](state, { house }) {
    state.house = house
  },
  [types.deleteHouseSuccess](state, { id }) {
    // eslint-disable-next-line no-underscore-dangle
    state.myHouses = state.myHouses.filter(house => house._id !== id)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
