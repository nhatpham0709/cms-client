<template>
  <div :class="dark ? 'dark' : 'light'">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: 'guest',
  computed: {
    ...mapGetters(['dark']),
  },
  mounted() {
    if (localStorage.theme === undefined) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        localStorage.theme = 'dark'
        this.setDarkMode(true)
      } else {
        localStorage.theme = 'light'
      }
    } else {
      this.setDarkMode(localStorage.theme === 'dark')
    }
  },
  methods: {
    ...mapActions(['setDarkMode']),
  },
}
</script>
