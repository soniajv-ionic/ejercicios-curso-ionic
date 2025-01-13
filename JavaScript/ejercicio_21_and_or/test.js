function testDoor01() {
    console.log('Verificar puerta 01');
    return false;
}

function testDoor02() {
    console.log('Verificar puerta 02');
    return true;
}

if (testDoor01() && testDoor02()) {
    console.log('TODO OK');
} else {
    console.log('ALGUNA PUERTA ABIERTA');
}
