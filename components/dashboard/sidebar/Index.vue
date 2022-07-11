<template>
  <div class="text-black dark:text-white border-r-2 border-gray-700 relative">
    <NuxtLink
      :to="localePath('/')"
      class="dark:bg-gray-900 flex items-center px-5 p-3 sticky top-2 z-10"
      :class="isSideBarOpen ? 'justify-start' : 'justify-center'"
    >
      <img
        :src="$auth.user.avatar"
        class="w-10 h-10"
        :alt="$auth.user.full_name"
      />
      <h1 v-if="isSideBarOpen" class="ml-3">Nuxt CRM</h1>
    </NuxtLink>

    <ul class="mt-5">
      <DashboardSidebarLink
        v-for="(link, index) in navLinks"
        :key="`sidebar-link-${index}`"
        :to="link.to"
        :icon="link.icon"
        :title="link.title"
      />
    </ul>
    <div
      class="text-4xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 absolute py-4 px-8 w-full bottom-0"
      @click="toggleSideBar"
    >
      <div
        class="flex items-center"
        :class="isSideBarOpen ? 'justify-start' : 'justify-center'"
      >
        <span class=""> &#8801; </span>
        <span v-if="isSideBarOpen" class="text-sm ml-4">
          Collapse sidebar
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const NAV_LINKS = {
  home: {
    title: 'Home',
    icon: 'fa-solid fa-gauge-high fa-fw',
    to: '/',
  },
  roles: {
    title: 'Roles',
    icon: 'fa-solid fa-hand-sparkles fa-fw',
    to: '/roles',
  },
  permissions: {
    title: 'Permissions',
    icon: 'fa-solid fa-triangle-exclamation fa-fw',
    to: '/permissions',
  },
  users: {
    title: 'Users',
    icon: 'fa-solid fa-users-gear fa-fw',
    to: '/users',
  },
  profile: {
    title: 'Profile',
    icon: 'fa-solid fa-id-badge fa-fw',
    to: '/profile',
  },
}
export default {
  props: {
    mobilePosition: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      style: {
        left: 'left-0',
        right: 'right-0 lg:left-0',
      },
      navLinks: NAV_LINKS,
    }
  },
  computed: {
    isSideBarOpen() {
      return this.$store.getters.sideBarOpen
    },
  },
  methods: {
    hoverSideBar() {
      if (!this.isSideBarOpen) {
        this.toggleSideBar()
      }
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
  },
}
</script>
<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
