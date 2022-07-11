import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: `${this.$t(`meta.${this.model}.title`)} | ${this.$config.appName}`,
      meta: [
        {
          name: 'description',
          content: this.$t(`meta.${this.model}.description`),
        },
      ],
    }
  },
  computed: {
    ...mapState({
      pagination: (state) => state.data.pagination,
      model: (state) => state.data.model,
      records: (state) => state.data.records,
      request: (state) => state.data.request,
      loadingData: (state) => state.data.loadingData,
      deleteModalTitle: (state) => state.data.deleteModalTitle,
      deleteModalActive: (state) => state.data.deleteModalActive,
      modalActive: (state) => state.data.modalActive,
      modalTitle: (state) => state.data.modalTitle,
    }),
  },
  methods: {
    toggleDeleteModal(name, id) {
      this.$store.dispatch('data/toggleDeleteModal', { name, id })
    },
    closeDeleteModal() {
      this.$store.commit('data/SET_DELETE_MODAL_ACTIVE', false)
    },
  },
}
