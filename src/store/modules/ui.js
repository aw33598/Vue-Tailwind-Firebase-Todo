const state = {
  loading: true
}

const getters = {
  getLoading(state) {
    return state.loading
  }
}

const mutations = {
  setLoadingState(state, loading) {
    state.loading = loading
  }
}

const actions = {
  setLoadingState({ commit }, loading) {
    commit('setLoadingState', loading)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}