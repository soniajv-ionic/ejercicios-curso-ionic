const btnNext = document.querySelector("#next-question");
const result = document.querySelector("#result");
// Selecciona todas las preguntas (divs con clase "question")
const questions = document.querySelectorAll(".question");
let correctAnswer = false;
let currentQuestion = "question-1";
let puntuacion = 0;
const divPuntuacion = document.querySelector('#puntuacion');
let intervalId

document.querySelector("#question-2").classList.add("hidden");
document.querySelector("#question-3").classList.add("hidden");
document.querySelector("#puntuacion").classList.add("hidden");

let answers = ["a", "b", "c"];

function nextQuestion() {
  let numCurrentQuestion = parseInt(
    currentQuestion[currentQuestion.length - 1]
  );
  let nextQuestion = `question-${numCurrentQuestion + 1}`;
  if (numCurrentQuestion < questions.length) {
    document.querySelector(`#${currentQuestion}`).classList.add("hidden");
    document.querySelector(`#${nextQuestion}`).classList.remove("hidden");
    stopCrono();
    initCrono();
  } else {
    clearInterval(intervalId);
    //btnNext.disabled = true;
    document.querySelector(".container").classList.add("hidden");
    divPuntuacion.classList.remove("hidden");
    mostrarPuntuacion();
  }
  currentQuestion = nextQuestion;
}

btnNext.addEventListener("click", () => {
  if (correctAnswer) {
    nextQuestion();
  }
  result.textContent = "";
});

/* Añadir listeners a los radiobuttons  */
questions.forEach((question) => {
  // Selecciona los radio buttons dentro de cada pregunta
  const radioButtons = question.querySelectorAll('input[type="radio"]');

  // Agrega un listener al evento "change" para cada radio button
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      checkAnswer(radio.name, event.target.value);
      currentQuestion = question.id;
    });
  });
});

function checkAnswer(questionId, answer) {
  let numQuestion = questionId[questionId.length - 1];
  if (answer === answers[numQuestion - 1]) {
    result.textContent = "Respuesta correcta";
    puntuacion++;
    correctAnswer = true;
  } else {
    result.textContent = "Respuesta incorrecta";
    correctAnswer = false;
  }
}

let contador = 0;
function mostrarCrono() {  
  contador++;
  document.querySelector("#crono").innerText = contador;
  if (contador === 5) {
    nextQuestion();
    contador = 0;
  }

}

function initCrono() {
  contador = 0;
  intervalId = setInterval(mostrarCrono, 1000);
}

function stopCrono() {
  clearInterval(intervalId);
}


function mostrarPuntuacion() {
      // Crear el h1 con la puntuación
      const h1 = document.createElement('h1');
      h1.textContent = "PUNTUACION"; // Se inserta la puntuación en el h1
      
      // Crear el h3 con el mensaje
      const h3 = document.createElement('h3');
      h3.textContent = `La puntuación obtenida es: ${puntuacion}`; // Se inserta el texto en el h3
      
      // Agregar los elementos al div
      divPuntuacion.appendChild(h1);
      divPuntuacion.appendChild(h3);
;
}

initCrono();
