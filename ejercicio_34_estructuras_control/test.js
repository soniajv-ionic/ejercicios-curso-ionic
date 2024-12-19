let edad = 45;
if (edad < 18) {
    // codigo si condicion es true
} else if (edad > 50) {
    // codigo si se cumple la condicion
} else {
    // si no se cumple ninguna condicion anterior
}

console.log('----- WHILE ----- ');
let limite = 100;
let actual = 0;
while (actual < limite) {
    actual += 10;
    console.log(actual);
}

console.log('\n----- DO - WHILE -----');
actual = 0;
do {
    actual += 10;
    console.log(actual);
} while (actual < limite)

console.log('\n----- SWITCH -----');
let opcion = 1;
switch (opcion) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default: //opcional
        console.log('ninguna');
        break;
}