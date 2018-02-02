import * as types from './mutation-types'

const state = {
  count: 1
}

const getters = {
  doubleCount: state => state.count * 2
}

const mutations = {
  [types.DO_SOMETHING](state) {
    state.count++
  }
}

const actions = {
  add ({ state, commit, rootState }) {
    commit(types.DO_SOMETHING)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
