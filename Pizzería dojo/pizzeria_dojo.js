function pizzaOven(TipoMasa, TipoSalsa, Quesos, Ingredientes) {
    var pizza = {};
    pizza.TipoMasa = TipoMasa;
    pizza.TipoSalsa = TipoSalsa;
    pizza.Quesos = Quesos;
    pizza.Ingredientes = Ingredientes;
    return pizza;
}
var pizza_1 = pizzaOven("estilo Chicago", "Tradicional", ["mozarella"], ["pepperoni", "salchicha"]);
console.log(pizza_1);
var pizza_2 = pizzaOven("lanzada a mano", "marina", ["mozzarella"], ["champiñones", "aceitunas", "cebollas"])
console.log(pizza_2);
var TipoMasa = [
    "estilo Chicago",
    "lanzado a mano", 
    "borde queso", 
    "integral", 
    "sin gluten", 
    "coliflor"
    ];
var TipoSalsa = [
    "Tradicional", 
    "marina", 
    "BBQ", 
    "Salsa Alfredo", 
    "Pesto", 
    "Salsa Blanca"
    ];
var Quesos = [
    "mozzarella", 
    "queso azul", 
    "mantecoso", 
    "cheddar", 
    "parmesano", 
    "Gauda"
];
var Ingredientes = [
    "pepperoni", 
    "salchicha", 
    "champiñones", 
    "aceituna", 
    "cebolla", 
    "tomate", 
    "jalapeño", 
    "choclo", 
    "pollo", 
    "tocino"
];
function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza(){
    var pizza = {};
    pizza.TipoMasa = randomPick(TipoMasa);
    pizza.TipoSalsa = randomPick(TipoSalsa);
    pizza.Quesos = [];
    pizza.Ingredientes = [];
    for (var i = 0; i < randomRange(5, 1); i++) {
        pizza.Quesos.push(randomPick(Quesos));
    }
    for (var i = 0; i < randomRange(4, 0); i++) {
        pizza.Ingredientes.push(randomPick(Ingredientes));
    }
    return pizza;
}
console.log(randomPizza());