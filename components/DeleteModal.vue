<template>
  <Transition
    enter-active-class="transition ease duration-700 transform"
    enter-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease duration-1000 transform"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <div
      v-if="deleteModalActive"
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-full"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div
        class="relative p-4 w-screen h-screen flex items-center justify-center"
      >
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            @click="closeModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="p-6 text-center">
            <svg
              class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 class="mb-5 text-lg text-black dark:text-white font-normal">
              Are you sure you want to delete
              <span class="text-red-500 font-bold">{{
                deleteModalItemName
              }}</span>
              ?
            </h3>
            <Button type="red" :content="submitContent" @click="submit" />
            <Button type="dark" :content="cancelContent" @click="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    submitContent: {
      type: String,
      required: false,
      default: 'Delete',
    },
    cancelContent: {
      type: String,
      required: false,
      default: 'Cancel',
    },
  },
  computed: {
    ...mapState({
      deleteModalActive: (state) => state.data.deleteModalActive,
      deleteModalItemName: (state) => state.data.deleteModalItemName,
      deleteModalItemId: (state) => state.data.deleteModalItemId,
      model: (state) => state.data.model,
    }),
  },
  methods: {
    submit() {
      this.$store.dispatch('data/deleteRecord')
    },
    closeModal() {
      this.$store.commit('data/SET_DELETE_MODAL_ACTIVE', false)
    },
  },
}
</script>
