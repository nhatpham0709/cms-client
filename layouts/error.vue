<template>
  <div class="h-full w-full flex flex-wrap items-center justify-center">
    <div
      class="container flex flex-col md:grid md:grid-cols-2 md:gap-20 items-center justify-center px-5 text-black dark:text-white"
    >
      <div>
        <div class="text-5xl font-bold mb-3 text-blue-500">{{ status }}</div>
        <p class="text-2xl md:text-3xl font-light leading-normal">
          {{ error.message }}
        </p>
        <p class="my-6">
          {{ $t('error.suggestion') }}
        </p>
        <div class="flex justify-center">
          <Button
            type="dark"
            :content="$t('error.back')"
            @click="$router.go(-1)"
          />
          <NuxtLink :to="localePath('/')" class="btn-primary">
            {{ $t('error.home') }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <NuxtImg :src="`/images/${status}.jpeg`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout(app) {
    return app.$auth.loggedIn ? 'default' : 'guest'
  },
  props: {
    error: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    status() {
      return this.error.statusCode || '500'
    },
    title() {
      return `${this.status} - ${this.$t(
        `pagination.error.${this.status}.title`
      )}`
    },
  },
}
</script>
