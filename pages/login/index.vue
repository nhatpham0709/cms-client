<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2
              class="text-4xl font-bold text-center text-gray-700 dark:text-white"
            >
              Nuxt CRM
            </h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">
              Sign in to your account
            </p>
          </div>

          <form class="mt-8" @submit.prevent="login">
            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Email, username or phone number</label
              >
              <input
                v-model="form.identity"
                type="text"
                autocomplete="email"
                placeholder="example@example.com"
                class="input"
              />
            </div>

            <div class="mt-6">
              <div class="flex justify-between mb-2">
                <label class="text-sm text-gray-600 dark:text-gray-200"
                  >Password</label
                >
                <a
                  href="#"
                  class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                  >Forgot password?</a
                >
              </div>

              <input
                v-model="form.password"
                type="password"
                autocomplete="current-password"
                placeholder="Your Password"
                class="input"
              />
            </div>

            <div class="mt-6">
              <Button
                class="w-full"
                type="primary"
                content="Sign in"
                :loading="loading"
                @click="login"
              />
            </div>

            <p class="mt-6 text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <a
                href="#"
                class="text-blue-500 focus:outline-none focus:underline hover:underline"
                >Sign up</a
              >.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guest',
  data() {
    return {
      form: {
        identity: '',
        password: '',
        remember: false,
      },
      loading: false,
      error: '',
    }
  },
  head() {
    return {
      title: `${this.$t(`meta.login.title`)} | ${this.$config.appName}`,
      meta: [
        {
          name: 'description',
          content: this.$t('meta.login.description'),
        },
      ],
    }
  },
  methods: {
    async login() {
      this.loading = true
      try {
        await this.$auth.loginWith('laravelJWT', {
          data: this.form,
        })
      } catch (e) {
        if (e.response.data.meta.errors) {
          this.error = e.response.data.meta.errors
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
