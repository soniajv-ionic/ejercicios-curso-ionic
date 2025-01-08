const btnNext = document.querySelector("#next-question");
const result = document.querySelector("#result");
// Selecciona todas las preguntas (divs con clase "question")
const questions = document.querySelectorAll(".question");
let correctAnswer = false;
let currentQuestion = "question-1";

document.querySelector("#question-2").classList.add("hidden");
document.querySelector("#question-3").classList.add("hidden");

let answers = ["a", "b", "c"];

function nextQuestion() {
  let numCurrentQuestion = parseInt(
    currentQuestion[currentQuestion.length - 1]
  );
  let nextQuestion = `question-${numCurrentQuestion + 1}`;
  if (numCurrentQuestion < questions.length) {
    document.querySelector(`#${currentQuestion}`).classList.add("hidden");
    document.querySelector(`#${nextQuestion}`).classList.remove("hidden");
  } else {
    clearInterval(intervalId);
    btnNext.disabled = true;
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
    correctAnswer = true;
  } else {
    result.textContent = "Respuesta incorrecta";
    correctAnswer = false;
  }
}

let contador = 0;
const intervalId = setInterval(() => {
  contador++;
  document.querySelector("#crono").innerText = contador;
  if (contador === 5) {
    nextQuestion();
    contador = 0;
  }
}, 1000);
