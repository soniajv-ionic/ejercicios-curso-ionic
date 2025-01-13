/*
    setTimeout(() => {
        document.querySelector('footer').style.display = 'none';
    }, 3000);
    */

setTimeout(() => {
  document.querySelector("footer").style.bottom = "-200px";
}, 3000);

/*
     setTimeout(() => {
         document.querySelector('footer').style.position = 'static';
     }, 3000);
     */

const scaryFace = document.querySelector(".scary-face");
const audio = new Audio("terror-scream.mp3");
audio.volume = 0.8; // Volumen al 80%
scaryFace.classList.add("hidden"); // Añade la clase que oculta el div

setTimeout(() => {
  scaryFace.classList.remove("hidden"); // Elimina la clase que oculta el div
}, 5000);

scaryFace.addEventListener('mouseover', function() {
  audio.play();  // Reproduce el sonido al pasar el mouse
});
