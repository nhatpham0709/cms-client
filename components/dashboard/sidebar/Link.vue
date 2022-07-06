<template>
  <li
    :class="$route.path === to && 'bg-gray-200 dark:bg-gray-700'"
    class="hover:bg-gray-200 dark:hover:bg-gray-700"
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
