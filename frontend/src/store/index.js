import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {id: null, name: null, email: null},
    isLogged: localStorage.getItem('logged_in') === 'true'
  },
  mutations: {
    setAuthenticatedUser: (state, user) => {
      state.user = user
    },
    setIsLogged: (state, isLogged) => {
      const logged = isLogged === true
      state.isLogged = logged
      localStorage.setItem('logged_in', logged.toString())
    }
  },
  actions: {
    setAuthenticatedUser: ({commit}, data) => {
      commit('setAuthenticatedUser', data)
    },
    setAuthenticated: ({commit}, data) => {
      commit('setIsLogged', data)
    }
  },
  getters: {
    getAuthenticatedUser: (state) => state.user,
    getIsLogged: (state) => state.isLogged,
  }
})
