import Vue from 'vue'

import Vuex from 'vuex'
import address from './address/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {},
  mutations: {
    changToken(state, payload) {
      state.token = payload
    },
  },
  state: {
    token: '',
  },
  getters: {},
  modules: {
    address,
  },
})

export default store
