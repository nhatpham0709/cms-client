<template>
  <li
    :class="
      $route.path === to &&
      'bg-gray-50 border-l-4 border-blue-500 dark:bg-gray-600'
    "
    class="hover:bg-gray-100 hover:border-l-4 hover:border-blue-500 dark:hover:bg-gray-500"
  >
    <NuxtLink
      :to="to"
      class="flex items-center py-4 px-8"
      :class="isSideBarOpen ? 'justify-start' : 'justify-center'"
    >
      <i :class="icon" class="text-xl"></i>
      <span v-if="isSideBarOpen" class="mx-4 text-sm">
        {{ title }}
      </span>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    isSideBarOpen() {
      return this.$store.getters.sideBarOpen
    },
  },
}
</script>
