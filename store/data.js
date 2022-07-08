export const state = () => ({
  model: '',
  records: [],
  meta: {
    total: 0,
    from: 0,
    to: 0,
    total_pages: 1,
    current_page: 1,
  },
  metaRequest: {
    per_page: 5,
    relationships: ['permissions'],
    order_column: 'created_at',
    order_by: 'desc',
    search_columns: [],
    keyword: '',
  },
  submiting: false,
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
  SET_META(state, meta) {
    state.meta = meta
  },
  SET_CURRENT_PAGE(state, currentPage) {
    state.meta.current_page = currentPage
  },
  SET_MODEL(state, model) {
    state.model = model
  },
}

export const actions = {
  setData({ commit }, records, meta) {
    commit('SET_RECORDS', records)
    commit('SET_META', meta)
  },

  async getData({ commit, state }) {
    commit('SET_MODEL', this.$router.currentRoute.path.split('/')[1])
    try {
      const res = await this.$api.getData(
        state.model,
        state.meta.current_page,
        state.metaRequest
      )
      commit('SET_RECORDS', res.data)
      commit('SET_META', res.meta.pagination)
    } catch (e) {}
  },
}
