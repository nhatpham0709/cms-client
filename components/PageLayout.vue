<template>
  <div class="flex flex-wrap" @keyup.esc="closeModal">
    <div
      class="w-full bg-gray-50 dark:bg-gray-800 py-6 px-6 lg:mx-20 rounded-3xl"
    >
      <div class="flex justify-between items-center mb-8">
        <p class="text-2xl font-bold">{{ title }}</p>
      </div>
      <div class="flex justify-between">
        <select
          :value="perPage"
          class="h-full rounded border block appearance-none bg-white dark:bg-gray-600 py-2 px-4 pr-8 leading-tight"
          @change="changePerPage"
        >
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
        <Button
          type="green"
          :content="createTitle"
          @click="toggleModal(createTitle)"
        />
      </div>
      <div class="flex flex-col mt-5">
        <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr class="">
                  <th
                    v-for="(header, index) in tableHeaders"
                    :key="`header-${index}`"
                    class="table-header"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white dark:bg-gray-800">
                <template v-if="loading">
                  <tr
                    v-for="index in perPage"
                    :key="`loading-${index}`"
                    class="w-full my-2"
                  >
                    <td
                      v-for="count in tableHeaders.length"
                      :key="`skeleton-${count}`"
                      class="py-2"
                    >
                      <div
                        class="animate-pulse rounded-full mx-2 my-4 h-6 bg-gray-200 dark:bg-gray-600"
                      ></div>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <slot name="table-content"></slot>
                </template>
              </tbody>
            </table>

            <Pagination
              :to="pagination.to"
              :from="pagination.from"
              :total="pagination.total"
              :total-pages="pagination.total_pages"
              :current-page="pagination.current_page"
              :max-pages="5"
            />
          </div>
        </div>
      </div>
      <DeleteModal />
      <slot name="modal"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    perPage: {
      type: Number,
      default: 5,
    },

    tableHeaders: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    createTitle: {
      type: String,
      required: false,
      default: 'Create',
    },
  },
  methods: {
    changePerPage(e) {
      this.$store.dispatch('data/changePerPage', parseInt(e.target.value))
    },
    toggleModal(title) {
      this.$store.commit('data/SET_MODAL_TITLE', title)
      this.$store.dispatch('data/toggleModal')
    },
    closeModal() {
      this.$store.dispatch('data/closeModal')
      this.$store.dispatch('data/closeDeleteModal')
    },
  },
}
</script>
