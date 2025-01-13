ingredient1 = {
    name: 'potato',
    amount: 200
}

ingredient2 = {
    name: 'onion',
    amount: 150
}

ingredient3 = {
    name: 'egg',
    amount: 100
}

let ingredients = [ingredient1, ingredient2, ingredient3];
let total = ingredients.reduce((cantidades, ingredientActual)=> cantidades +ingredientActual.amount, 0);
console.log(total);


let cantidades = 0;
ingredients.forEach( ing => {

    cantidades = cantidades + ing.amount;
    
});
console.log(cantidades);