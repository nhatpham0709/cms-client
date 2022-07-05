<template>
  <li class="hover:bg-gray-700">
    <NuxtLink :to="to">
      <div
        class="flex items-center justify-start my-1 p-3 w-full hover:text-white"
      >
        <div
          :class="$route.path === to && 'bg-gray-700 rounded-full'"
          class="px-4 py-3"
        >
          <i :class="icon"></i>
        </div>
        <span
          class="mx-4 text-sm"
          :class="
            state.open
              ? 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto'
              : 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all'
          "
        >
          {{ title }}
        </span>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'SidenavItem',
  inject: ['state'],
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
}
</script>
