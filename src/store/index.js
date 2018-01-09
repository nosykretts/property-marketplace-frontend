import Vue from 'vue'
import Vuex from 'vuex'
import notify from './modules/notify'
import auth from './modules/auth'

import house from './modules/house'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  modules: {
    notify,
    auth,
    house,
  },
  strict: true,
})
