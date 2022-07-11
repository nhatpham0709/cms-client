import webpack from 'webpack'

export default {
  head: {
    title: 'Nuxt CMS',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
      },
    ],
  },
  css: ['@/assets/css/main.css'],
  styleResources: {
    scss: ['@/assets/style/scss/variables/*.scss'],
  },

  plugins: [
    // '@/plugins/loading',
    '@/plugins/vee-validate',
    '@/plugins/api.js',
    { src: '@/plugins/flowbite', ssr: false },
  ],

  components: true,

  env: {
    apiUrl: process.env.API_URL,
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/moment',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
  ],
  toast: {
    position: 'top-right',
    duration: 3000,
    className: '',
    action: {
      text: 'close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      },
    },
  },
  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
  },
  auth: {
    strategies: {
      laravelJWT: {
        provider: 'laravel/jwt',
        url: process.env.API_URL,
        endpoints: {
          login: { url: '/auth/login' },
          user: { url: '/auth/user' },
          logout: { url: '/auth/logout' },
          refresh: { url: '/auth/refresh' },
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60,
        },
        refreshToken: {
          maxAge: 20160 * 60,
        },
      },
    },
  },
  moment: {
    locales: ['vi'],
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      alwaysRedirect: true,
      redirectOn: 'root',
    },
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'vi', name: 'Tiếng Việt', iso: 'vi-VN', file: 'vi.json' },
    ],
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: 'vi',
    },
    langDir: '~/lang/',
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
    transpile: ['vee-validate/dist/rules'],
  },
}
