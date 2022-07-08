import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      meta: (state) => state.data.meta,
      model: (state) => state.data.model,
      records: (state) => state.data.records,
      metaRequest: (state) => state.data.metaRequest,
    }),
  },
  async asyncData({ store }) {
    await store.dispatch('data/getData')
  },
  mounted() {
    this.modalDeleteId = `${this.model}-delete-modal`
  },
  watch: {
    metaRequest: {
      handler() {
        this.$fetch()
      },
      deep: true,
    },
  },
  methods: {
    async changePage(page) {
      this.$store.commit('data/SET_CURRENT_PAGE', page)
      await this.$store.dispatch('data/getData')
    },
    editItem(item) {
      this.modalId = `${this.model}-edit-modal`
      this.modalTitle = `Edit ${this.model}`
      this.modalTextConfirm = 'Update'
      this.selectedItem = { ...item }
      this.showModal()
    },
    addItem() {
      this.modalId = `${this.model}-add-modal`
      this.modalTitle = `Add ${this.model}`
      this.modalTextConfirm = 'Create'
      this.showModal()
    },
    showModal() {
      this.$nextTick(() => {
        const modal = document.getElementById(this.modalId)
        if (!modal.open) {
          modal.showModal()
        }
      })
    },
    deleteItem(item) {
      this.textDelete = item.name
      this.selectedItem = item
      this.$nextTick(() => {
        const modal = document.getElementById(this.modalDeleteId)
        if (!modal.open) {
          modal.showModal()
        }
      })
    },
    confirmDelete() {
      this.submiting = true
      try {
        this.$api.delete(this.model, this.selectedItem.id)
        this.notifySuccess()
        this.getData()
      } catch (e) {
        this.notifyError()
      } finally {
        document.getElementById(this.modalDeleteId).close()
        this.submiting = false
      }
    },
    handleCloseModal() {
      setTimeout(() => {
        for (const key in this.selectedItem) {
          delete this.selectedItem[key]
        }
      }, 500)
    },
    handleSubmitModal() {
      this.submiting = true
      this.$api
        .store(this.model, this.selectedItem)
        .then((res) => {
          this.submiting = false
          if (res.status === 200 && res.data && res.data.code === 0) {
            document.getElementById(this.modalId).close()
            this.notifySuccess()
          } else if (res.data && res.data.msg) {
            // this.errorMsg.name = err.data.msg
          } else {
            document.getElementById(this.modalId).close()
            this.notifyError()
          }
        })
        .catch((err) => {
          this.submiting = false
          if (err.res.status === 422 && err.res.data && err.res.data.message) {
            this.errorMsg.name = err.res.data.message
          } else {
            document.getElementById(this.modalId).close()
            this.notifyError()
          }
        })
    },
    notifyError() {
      this.$notify({
        title: 'Notify',
        text: 'Something went wrong, please try again later.',
        type: 'error',
      })
    },
    notifySuccess() {
      this.$notify({
        title: 'Notify',
        text: 'Success',
        type: 'success',
      })
    },
  },
}
