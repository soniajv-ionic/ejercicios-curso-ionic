function sumar(num1, num2) {

        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Los argumentos deben ser números');
        } 

        return num1 + num2;

}

function restar(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Los argumentos deben ser números');
    } 

    return num1 + num2;

}

const bSumar = document.querySelector(".b-sumar");
const bRestar = document.querySelector(".b-restar");


bSumar.addEventListener("click", () => {
    const num1 = document.querySelector(".num1").value;
    const num2 = document.querySelector(".num2").value;

    const resultado = sumar(num1, num2);

    document.querySelector(".result").textContent = resultado;
});

bRestar.addEventListener("click", () => {
    const num1 = document.querySelector(".num1").value;
    const num2 = document.querySelector(".num2").value;

    const resultado = restar(num1, num2);

    document.querySelector(".result").textContent = resultado;
});