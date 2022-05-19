export default function (context) {
  return context.$axios.$post('https://reqres.in/api/login', {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  }).then((res) => {
    console.log(res)
    const realToken = 'QpwL5tke4Pnpja7X4'
    // const fakeToken = 'QpwL5tke4Pnpja7X4fake'
    if (res.token !== realToken) {
      context.redirect('/')
    }
  })
}
