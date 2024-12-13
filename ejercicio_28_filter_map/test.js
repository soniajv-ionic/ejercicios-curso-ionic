let playa_1 = {
    nombre: 'Famara',
    pais: 'España',
    dificultad: 'Principiante'
}

let playa_2 = {
    nombre: 'Nazaré',
    pais: 'Portugal',
    dificultad: 'Experto'
}

let playa_3 = {
    nombre: 'Pipeline',
    pais: 'Estados Unidos',
    dificultad: 'Experto'
}

let playa_4 = {
    nombre: 'Somo',
    pais: 'España',
    dificultad: 'Intermedio'
}

let playas = new Array();
playas.push(playa_1);
playas.push(playa_2);
playas.push(playa_3);
playas.push(playa_4);




// 1. Filtrar las playas de nivel experto
console.log('----- Playas nivel Experto -----');
let nivel = playas.filter(playa => {
    return playa.dificultad === 'Experto';
});

console.log(JSON.stringify(nivel, null, 2));

playas.filter(playa => {
    return playa.dificultad === 'Experto';
}).forEach(playa => {
    console.log(`Playa Experto: ${playa.nombre}`);
});


// 1. Filtrar las playas de España

console.log('----- Playas de España -----');
let playasEsp = playas.filter(playa => {
    return playa.pais === 'España';
});
console.log(playasEsp);//JSON.stringify(playasEsp, null, 2));

playas
    .filter(playa => playa.pais === 'España')
    .forEach(playa => console.log(`Playa España: ${playa.nombre}`));

// 3. Obtención del codigo HTML que representa una playa

console.log('----- Código HTML de las playas -----');
// <div class='playa'><div>Playa: nombre_playa</div><div>Pais: nombre_pais</div><div>Dificultad: dificultad</div></div>
let htmlPlaya = playas.map(playa => {
    return `<div class='playa'><div>Playa: ${playa.nombre}</div><div>Pais: ${playa.pais}</div><div>Dificultad: ${playa.dificultad}</div></div>`;
});
console.log(htmlPlaya);

playas
    .filter(playa => playa.dificultad === 'Experto')
    .map(playa => `<div class='playa'><div>Playa: ${playa.nombre}</div><div>Pais: ${playa.pais}</div><div>Dificultad: ${playa.dificultad}</div></div>`)
    .forEach(linea => console.log(linea))