export default function (
  { $auth, $axios, app, redirect, error },
  inject
) {
  const axios = $axios.create({
    headers: {
      common: {
        ContentType: 'application/json',
        Accept: 'application/json',
      },
    },
  })
  axios.defaults.baseURL = process.env.apiUrl
  const lang = app.$cookiz.get('lang')

  const token = app.$cookiz.get('auth._token.laravelJWT')

  if (token) {
    axios.defaults.headers.common.Authorization = token
  }

  if (lang) {
    axios.setHeader('Accept-Language', lang)
  }

  axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    if ([401].includes(code)) {
      $auth.logout();
      redirect('/login')
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
