export const state = () => ({
  model: '',
  loadingData: false,
  records: [],
  pagination: {
    total: 0,
    from: 0,
    to: 0,
    total_pages: 1,
    current_page: 1,
  },
  request: null,
  modalId: '',
  modalTitle: '',
  modalTextConfirm: '',
  modalTextCancel: 'Cancel',
  modalDeleteId: '',
  textDelete: '',
})

export const getters = {
  loading: (state) => state.loading,
}

export const mutations = {
  SET_RECORDS(state, records) {
    state.records = records
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination
  },
  SET_CURRENT_PAGE(state, currentPage) {
    state.pagination.current_page = currentPage
  },
  SET_MODEL(state, model) {
    state.model = model
  },
  SET_LOADING_DATA(state, bool) {
    state.loadingData = bool
  },
  SET_PER_PAGE(state, perPage) {
    state.request.per_page = perPage
  },
  SET_META_REQUEST(state, request) {
    state.request = request
  },
}

export const actions = {
  setRequest({ commit }, { model, request }) {
    commit('SET_MODEL', model)
    commit('SET_META_REQUEST', request)
    commit('SET_CURRENT_PAGE', 1)
  },
  async fetchData({ dispatch }, { model, request }) {
    dispatch('setRequest', { model, request })
    await dispatch('getData')
  },
  async changePage({ commit, dispatch }, page) {
    commit('SET_CURRENT_PAGE', page)
    await dispatch('getData')
  },
  async changePerPage({ commit, dispatch }, perPage) {
    commit('SET_PER_PAGE', perPage)
    await dispatch('getData')
  },
  async getData({ commit, state }) {
    commit('SET_LOADING_DATA', true)
    try {
      const res = await this.$api.getData(
        state.model,
        state.pagination.current_page,
        state.request
      )
      commit('SET_RECORDS', res.data)
      commit('SET_PAGINATION', res.meta.pagination)
    } catch (e) {
    } finally {
      commit('SET_LOADING_DATA', false)
    }
  },
}
