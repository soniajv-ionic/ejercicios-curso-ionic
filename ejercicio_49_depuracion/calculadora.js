const bSumar = document.querySelector(".b-sumar");
const bRestar = document.querySelector(".b-restar");
const bLimpiar = document.querySelector(".b-limpiar");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector(".result");

function sumar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Los argumentos deben ser números");
  }
  return num1 + num2;
}

function restar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") { 
    throw new Error("Los argumentos deben ser números");
  }
  return num1 + num2;
}

bSumar.addEventListener("click", () => {
  result.textContent = `Resultado: ${sumar(
    Number(num1.value),
    Number(num2.value)
  )}`;
});

bRestar.addEventListener("click", () => {
  result.textContent = `Resultado: ${restar(
    Number(num1.value),
    Number(num2.value)
  )}`;
});

bLimpiar.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
});
