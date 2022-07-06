<template>
  <header class="h-20 items-center relative z-10">
    <div
      class="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10"
    >
      <div
        class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68"
      >
        <div class="container flex left-0 relative w-3/4">
          <div
            class="group hidden items-center ml-8 relative w-full md:flex lg:w-72"
          >
            <div
              class="absolute cursor-pointer flex items-center justify-center h-10 p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden"
            >
              <svg
                fill="none"
                class="h-5 relative w-5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <svg
              class="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none w-4 sm:block text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <input
              type="text"
              class="bg-gray-100 dark:bg-gray-700 block leading-normal pl-10 py-1.5 pr-4 rounded-2xl text-gray-400 dark:text-white w-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div
          class="flex items-center text-black dark:text-white justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto"
        >
          <a class="block cursor-pointer pr-5" @click="toggleDarkMode">
            <i v-if="dark" class="fa-solid fa-cloud-sun"></i>
            <i v-else class="fa-solid fa-moon"></i>
          </a>
          <a href="#" class="block pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <a href="#" class="block pr-5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
          <a href="#" class="block pr-5 relative" @click="logout"> Log out </a>
          <a class="block relative">
            <img
              :alt="$auth.user.full_name"
              :src="$auth.user.avatar"
              class="h-10 mx-auto cursor-pointer object-cover rounded-full w-10"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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

    async logout() {
      await this.$auth.logout()
      this.$router.push(this.localePath('/login'))
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    toggleDarkMode() {
      this.setDarkMode(!this.dark)
      localStorage.theme = this.dark ? 'dark' : 'light'
    },
  },
}
</script>
