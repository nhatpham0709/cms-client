<template>
  <div
    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
  >
    <span class="text-xs xs:text-sm text-gray-900">
      Showing {{ from }} to {{ to }} of {{ total }} entries
    </span>
    <nav>
      <ul class="inline-flex mt-5">
        <li>
          <a
            class="btn-prev cursor-pointer"
            :class="{
              'pointer-events-none !bg-gray-200': currentPage === 1,
            }"
            @click="changePage(currentPage - 1)"
            >Previous</a
          >
        </li>
        <li v-for="page in totalPages" :key="`page-${page}`">
          <a
            class="cursor-pointer"
            :class="
              page === currentPage ? 'btn-pagination-active' : 'btn-pagination'
            "
            @click="changePage(page)"
            >{{ page }}</a
          >
        </li>
        <li>
          <a
            class="btn-next cursor-pointer"
            :class="{
              'pointer-events-none !bg-gray-200': currentPage === totalPages,
            }"
            @click="changePage(currentPage + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: false,
      default: 0,
    },
    from: {
      type: Number,
      required: false,
      default: 1,
    },
    to: {
      type: Number,
      required: false,
      default: 1,
    },
    totalPages: {
      type: Number,
      required: false,
      default: 1,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1,
    },
    maxPages: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  methods: {
    changePage(page) {
      if (page === this.currentPage) {
        return
      }
      this.$emit('changePage', page)
    },
  },
}
</script>
