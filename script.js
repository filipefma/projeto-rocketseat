function toggleMode () {
  const html = document.documentElement

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  //lendo acima: se existir a classList 'light', remova. se não existir, adicione

  //outra maneira (mais simplificada) de escrever o código acima:

  html.classList.toggle('light')


  //modificando a foto:

  const img = document.querySelector('#profile img') //capturando a tag 'img'

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/perfil-light.png')
    img.setAttribute('alt', 'Filipe sem barba')
  } else {
    img.setAttribute('src', './assets/perfil.png')
  }
}