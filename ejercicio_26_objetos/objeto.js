let burnNotice = {
    titulo : 'Burn Notice',
    numTemporadas: 7,
    sinopsis : 'El equipo A + MacGyver + espias en Miami',
    estreno : 2007,
    plataforma : 'Amazon Prime',
    reparto : [
        {
            nombre: 'Jeffrey Donovan',
            personaje: 'Michel Westen'
        },
        {
            nombre: 'Bruce Campbell',
            personaje: 'Sam Axe'
        },
        {
            nombre: 'Gabrielle Anwar',
            personaje: 'Fiona Glenanne'
        }
        ,
        {
            nombre: 'Sharon Gless',
            personaje: 'Madeline Westen'
        }
    ]
}
console.log(burnNotice.sinopsis);
console.log(burnNotice.reparto[1].personaje);
burnNotice.reparto.forEach(persona =>{
    console.log(persona.nombre, persona.personaje);
})
