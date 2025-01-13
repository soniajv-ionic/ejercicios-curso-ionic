const burnNotice = ['Michael', 'Fionna', 'Sam', 'Madeline']

for (let i = 0; i < burnNotice.length; i++, console.log('*')) {
    console.log(burnNotice[i]);
}

burnNotice.forEach((nombre) => {
    console.log(nombre.toUpperCase());
});