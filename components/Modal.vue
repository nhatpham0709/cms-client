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
      v-if="isModalActive"
      tabindex="-1"
      aria-hidden="true"
      aria-modal="true"
      class="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-full"
      role="dialog"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div
        class="relative p-4 w-screen h-screen flex items-center justify-center"
      >
        <div
          class="relative max-w-2xl min-w-[50%] bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <div
            class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          </div>
          <div class="p-6 space-y-6">
            <slot name="content" />
          </div>
          <div
            class="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
          >
            <Button type="primary" :content="submitContent" @click="submit" />
            <Button type="dark" :content="cancelContent" @click="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    submitContent: {
      type: String,
      required: false,
      default: 'Submit',
    },
    cancelContent: {
      type: String,
      required: false,
      default: 'Cancel',
    },
  },
  data() {
    return {
      isModalActive: false,
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    toggleModal() {
      this.isModalActive = !this.isModalActive
    },
    closeModal() {
      this.isModalActive = false
    },
  },
}
</script>
