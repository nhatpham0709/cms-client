<template>
  <div :class="dark ? 'dark' : 'light'">
    <div
      class="bg-white dark:bg-gray-900 text-black dark:text-white h-screen overflow-hidden md:grid md:grid-cols-12 absolute md:relative"
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
        <main class="h-screen overflow-auto pb-36 px-2 md:pb-8 lg:px-4">
          <Nuxt />
          <DashboardFooter />
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
