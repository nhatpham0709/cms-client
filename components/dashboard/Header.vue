<template>
  <header class="h-20 items-center relative z-10 shadow">
    <div
      class="flex flex-center flex-col h-full justify-center mx-auto relative px-3 z-10"
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
          <client-only>
            <a class="block cursor-pointer pr-5">
              <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :title="locale.name"
                :to="switchLocalePath(locale.code)"
                ><img class="h-10 w-10" :src="`/images/${locale.code}.svg`" alt="flag" />
              </NuxtLink>
            </a>
          </client-only>
          <a href="#" class="block pr-5 relative">
            {{ $auth.user.first_name }}
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
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
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
