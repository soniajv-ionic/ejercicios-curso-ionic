/*
Longitud minima de 8 caracteres
Contiene una letra mayuscula
Contiene una letra minuscula
Continene un digito numerico
Continene un caracter especial
*/

const regex = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]))[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
const password = "patata@34E";

if (regex.test(password)) {
  console.log("La contraseña es válida.");
} else {
  console.log("La contraseña no cumple con los requisitos.");
}
