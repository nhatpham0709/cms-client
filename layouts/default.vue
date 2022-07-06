<template>
  <div :class="dark ? 'dark' : 'light'">
    <div
      class="bg-white dark:bg-gray-900 h-screen overflow-hidden grid grid-cols-12 relative"
    >
      <DashboardSidebar
        :class="isSideBarOpen ? 'col-span-2' : 'col-span-1'"
        mobile-position="right"
      />

      <div
        class="flex flex-col h-screen pl-0 lg:space-y-4"
        :class="isSideBarOpen ? 'col-span-10' : 'col-span-11'"
      >
        <DashboardHeader />
        <main
          class="h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4"
        >
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    isSideBarOpen() {
      return this.$store.getters.sideBarOpen
    },
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
