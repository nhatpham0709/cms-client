import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      pagination: (state) => state.data.pagination,
      model: (state) => state.data.model,
      records: (state) => state.data.records,
      request: (state) => state.data.request,
      loadingData: (state) => state.data.loadingData,
    }),
  },
  methods: {
    toggleModal() {
      this.$refs.createModal.toggleModal()
    },
    closeModal() {
      Object.keys(this.form).forEach((key) => {
        if (typeof this.form[key] instanceof Array) {
          this.form[key] = []
          return
        }
        if (this.form[key] instanceof Object) {
          this.form[key] = {}
          return
        }
        this.form[key] = ''
      })
      this.$refs.createModal.closeModal()
    },
  },
}
