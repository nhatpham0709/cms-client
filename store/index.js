export const state = () => ({
  sideBarOpen: false,
  dark: false,
})

export const getters = {
  sideBarOpen: (state) => state.sideBarOpen,
  dark: (state) => state.dark,
}

export const mutations = {
  TOGGLE_SIDE_BAR(state) {
    state.sideBarOpen = !state.sideBarOpen
  },
  SET_DARK_MODE: (state, bool) => {
    state.dark = bool
  },
}

export const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDE_BAR')
  },
  setDarkMode({ commit }, bool) {
    commit('SET_DARK_MODE', bool)
  },
}
