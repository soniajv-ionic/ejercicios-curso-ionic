function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

const KEY_TEXT = "text-color";
const KEY_BG_COLOR = "bg-color";
let bgColorControl = document.querySelector("#i-bg-color").value;
let textColorControl = document.querySelector("#i-text-color").value;  
const bSave = document.querySelector("#b-save");
const contenedor = document.querySelector("#contenedor");

bSave.addEventListener('click', () => {
    saveToLocalStorage.setItem(KEY_BG_COLOR, bgColorControl);
    saveToLocalStorage.setItem(KEY_TEXT, textColorControl);
})

