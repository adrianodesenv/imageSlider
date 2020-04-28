let time = 3000,
  imageIndex = 0,
  listaImage = [],
  totalImage;

function changeImagem() {
  let img = listaImage[imageIndex];
  img.classList.remove("selected");
  imageIndex++;
  if (imageIndex >= totalImage) imageIndex = 0;
  img = listaImage[imageIndex];
  img.classList.add("selected");
}
function initAnimation() {
  listaImage = document.querySelectorAll("#box img");
  totalImage = listaImage.length;
  setInterval(changeImagem, time);
}

window.addEventListener("load", initAnimation());
