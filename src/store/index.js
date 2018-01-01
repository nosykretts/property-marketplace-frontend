import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import mutations from './mutations'

import notify from './modules/notify'
import auth from './modules/auth'
import todos from './modules/todos'
import house from './modules/house'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  modules: {
    notify,
    auth,
    house,
  },
  strict: true,
})
