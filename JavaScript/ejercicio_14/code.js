document.querySelector("#btnAceptar").addEventListener("click", () => {
    let textValue = document.querySelector('#inputText').value;//document.getElementById('inputText').value;
    let numberValue = parseInt(document.querySelector('#inputNumber').value);
    let checkboxValue = document.querySelector('#inputCheckbox').checked;

    console.log(textValue, numberValue, checkboxValue);
    console.log(typeof(textValue), typeof(numberValue), typeof(checkboxValue));
    console.log(typeof(numberValue.toString()));
    
 })