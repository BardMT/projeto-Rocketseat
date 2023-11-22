function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pega tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto Matheus Bardini com camisa branca.")
  } else {
    // senão, manter imagem dark
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto Matheus Bardini com camisa preta.")
  }
}
