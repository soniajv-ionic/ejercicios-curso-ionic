const question1 = document.querySelector('#question-1');
const question2 = document.querySelector('#question-2');
const question3 = document.querySelector('#question-3');
const btnNext = document.querySelector('#next-question');
const result = document.querySelector('#result');

question2.classList.add('hidden');
question3.classList.add('hidden');

let answer1 = 'b';
let answer2 = 'b';
let answer3 = 'c';


function checkAnswer(questionId, correctAnswer) {
    const selectedRadio = document.querySelector(`input[name="${questionId}"]:checked`);
    if (selectedRadio) {
        if (selectedRadio.value === correctAnswer) {
            result.textContent = 'Respuesta correcta';
        } else {
            result.textContent = 'Respuesta incorrecta';
        }
    } 
}

        // Ocultar la pregunta actual y mostrar la siguiente
 //       document.getElementById(`question-${questionId.charAt(1)}`).classList.add('hidden');
 //       nextQuestion.classList.remove('hidden');
//        result.textContent = '';

function unckeckRadioButtons(questionId) {
    const radios = document.querySelectorAll(`input[name=${questionId}]`);
    radios.forEach(radio => {
        radio.checked = false;
    });
}

function nextQuestion() {
    if (!question1.classList.contains('hidden')) {
        question1.classList.add('hidden');
        question2.classList.remove('hidden');
        unckeckRadioButtons('q1');
    } else if (!question2.classList.contains('hidden')) {
        question2.classList.add('hidden');
        question3.classList.remove('hidden');
        unckeckRadioButtons('q2');
    } else if (!question3.classList.contains('hidden')) {
        question3.classList.add('hidden');
        question1.classList.remove('hidden');
        unckeckRadioButtons('q3');
    }
}

btnNext.addEventListener('click', () => {
    if (!question1.classList.contains('hidden')) {
        checkAnswer('q1', answer1);
    } else if (!question2.classList.contains('hidden')) {
        checkAnswer('q2', answer2);
    } else if (!question3.classList.contains('hidden')) {
        checkAnswer('q3', answer3);
    }
    nextQuestion();
});


let contador = 0;
setInterval(() => {
     contador++;
     document.querySelector('#crono').innerText = contador;
     if (contador === 5) {
         nextQuestion();
         contador = 0;
     }
}, 1000);