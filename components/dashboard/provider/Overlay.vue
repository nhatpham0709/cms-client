<template>

  <div
    :class="
      state.open &&
      'bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:bg-transparent'
    "
    @click="toggle"
  />
</template>

<script>
export default {
  name: 'Overlay',
  inject: ['state', 'toggle'],
}
</script>
