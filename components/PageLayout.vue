<template>
  <div class="flex flex-wrap">
    <div class="w-full bg-gray-800 py-6 px-6 lg:mx-20 rounded-3xl">
      <div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">{{ title }}</p>
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
  },
}
</script>
