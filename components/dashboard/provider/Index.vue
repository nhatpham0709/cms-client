<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DashboardProvider',
  provide() {
    const state = {}
    Object.defineProperty(state, 'open', {
      enumerable: true,
      get: () => this.open,
    })

    return { state, toggle: this.toggle }
  },
  data() {
    return {
      open: false,
    }
  },
  watch: {
    $route() {
      document.documentElement.style.overflow = 'hidden'
      if (this.open === true) {
        this.open = false
      }
    },
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
