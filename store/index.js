export const state = () => ({
  users: null
})

export const mutations = {
  setUsers(state, payload) {
    state.users = payload
  }
}

export const actions = {
  async getUsers({ commit }) {
    await this.$axios.get('auth/users/').then((response) => {
      if (response.status === 200) {
        commit('setUsers', response.data)
      }
    })
  }
}

export const getters = {
  isAuthenticated: (state) => state.auth.loggedIn,
  loggedInUser: (state) => state.auth.user,
  users: (state) => state.users
}
