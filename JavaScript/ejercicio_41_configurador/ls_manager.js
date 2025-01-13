const KEY_TEXT = "text-color";
const KEY_BG_COLOR = "bg-color";
const bgColorControl = document.querySelector("#i-bg-color");
const textColorControl = document.querySelector("#i-text-color");
const contenedor = document.querySelector("#contenedor");
const bSave = document.querySelector("#b-save");

bSave.addEventListener("click", function () {
  localStorage.setItem(KEY_BG_COLOR, bgColorControl.value);
  localStorage.setItem(KEY_TEXT, textColorControl.value);
});

let bgColor = localStorage.getItem(KEY_BG_COLOR);
let textColor = localStorage.getItem(KEY_TEXT);

if (bgColor) {
  contenedor.style.backgroundColor = bgColor;
  bgColorControl.value = bgColor;
}

if (textColor) {
  contenedor.style.color = textColor;
  textColorControl.value = textColor;
}
