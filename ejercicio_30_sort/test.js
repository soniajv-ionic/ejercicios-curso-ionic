const coche1 = {
    nombre : 'Seat 600',
    capacidad : 4,
    velocidad : 98
}

const coche2 = {
    nombre : 'Ferrari F40',
    capacidad : 2,
    velocidad : 280
}

const coche3 = {
    nombre : 'Skoda Fabia',
    capacidad : 5,
    velocidad : 145
}

let coches = [coche1, coche2, coche3];
coches.sort((c1, c2) =>{
    return c1.velocidad - c2.velocidad;
}).reverse();
coches.forEach(coche => {
    console.log(coche.nombre, coche.velocidad);
})