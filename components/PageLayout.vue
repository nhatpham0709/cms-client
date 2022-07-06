<template>
  <div class="flex flex-wrap">
    <div
      class="w-full bg-gray-50 dark:bg-gray-800 py-6 px-6 lg:mx-20 rounded-3xl"
    >
      <div
        class="flex justify-between text-black dark:text-white items-center mb-8"
      >
        <p class="text-2xl font-bold">{{ title }}</p>
      </div>
      <div class="flex justify-between">
        <select
          :value="perPage"
          class="h-full rounded border block appearance-none bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          @change="changePerPage"
        >
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
        <Button type="green" :content="createTitle" />
      </div>
      <div class="flex flex-col mt-5">
        <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr class="border-t-2">
                  <th
                    v-for="(header, index) in tableHeaders"
                    :key="`header-${index}`"
                    class="table-header"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
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
                        class="animate-pulse rounded-full mx-2 my-4 h-6 bg-gray-200"
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
              :to="meta.to"
              :from="meta.from"
              :total="meta.total"
              :total-pages="meta.totalPages"
              :current-page="meta.currentPage"
              :max-pages="5"
              @changePage="changePage"
            />
          </div>
        </div>
      </div>
      <slot name="content"> </slot>
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
    createTitle: {
      type: String,
      default: 'Create',
    },
    tableHeaders: {
      type: Array,
      default: () => [],
    },
    meta: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
  methods: {
    changePerPage(event) {
      this.$emit('update:perPage', Number(event.target.value))
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
  },
}
</script>
