<template>
  <aside
    class="scrollbar h-screen overflow-y-auto text-white top-0 lg:absolute bg-gray-900 lg:block lg:z-40"
    :class="[
      style[mobilePosition],
      state.open
        ? 'absolute duration-500 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64'
        : 'duration-700 ease-out hidden transition-all lg:w-24',
    ]"
  >
    <div class="pb-32 lg:pb-12">
      <div
        class="bg-gray-900 flex items-center justify-center pt-3 sticky top-0 z-10"
      >
        <img :src="$auth.user.avatar" width="80" height="80" :alt="$auth.user.full_name" />
      </div>
      <h1 class="text-center my-3 pb-6">{{ $auth.user.full_name }}</h1>
      <ul class="md:pl-3">
        <DashboardSidebarLink
          v-for="(link, index) in navLinks"
          :key="`sidebar-link-${index}`"
          :to="link.to"
          :icon="link.icon"
          :title="link.title"
        />
      </ul>
    </div>
  </aside>
</template>

<script>
const NAV_LINKS = {
  home: {
    title: 'Home',
    icon: 'fa-solid fa-gauge-high',
    to: '/',
  },
  roles: {
    title: 'Roles',
    icon: 'fa-solid fa-hand-sparkles',
    to: '/roles',
  },
  permissions: {
    title: 'Permissions',
    icon: 'fa-solid fa-triangle-exclamation',
    to: '/permissions',
  },
  users: {
    title: 'Users',
    icon: 'fa-solid fa-users-gear',
    to: '/users',
  },
  profile: {
    title: 'Profile',
    icon: 'fa-solid fa-id-badge',
    to: '/profile',
  },
}
export default {
  inject: ['state'],
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
