export default function ({ $auth, $axios, $t, app, redirect, error }, inject) {
  const axios = $axios.create({
    headers: {
      common: {
        ContentType: 'application/json',
        Accept: 'application/json',
      },
    },
  })
  const setToken = () => {
    const token = app.$cookiz.get('auth._token.laravelJWT')
    if (token) {
      axios.defaults.headers.common.Authorization = token
    }
  }
  const setLang = () => {
    const lang = app.$cookiz.get('lang')
    if (lang) {
      axios.setHeader('Accept-Language', lang)
    }
  }

  axios.defaults.baseURL = process.env.apiUrl
  setToken()
  setLang()

  $axios.onRequest(() => {
    setToken()
    setLang()
  })

  axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    if (code === 401) {
      $auth.logout()
      redirect('/login')
      return
    }
    if (code === 403) {
      error({
        statusCode: 403,
        message: app.i18n.t('error.message.403'),
      })
    }
    if ([500, 503].includes(code)) {
      error({
        statusCode: code,
        message: error.response.data.meta.message,
      })
    }
  })

  const api = {
    register: (payload) => axios.$post(`auth/register`, payload),
    getData: (model, currentPage, metaRequest) =>
      axios.$post(`${model}?page=${currentPage}`, metaRequest),
  }

  inject('api', api)
}
