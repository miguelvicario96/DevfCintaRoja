//Const
//Podemos modificar el contenido de arreglos u objetos definidos como const
const array = [];
const object = {};

array.push(1);  


//Arrow Functions
const suma = (a, b) => a + b;
console.log(suma(1, 5));

const saludo = nombre => 'Hola ' + nombre;
console.log(saludo('Miguel'));


//Async
console.log(1);

setTimeout(() => {
    console.log(2);
}, 5000);

setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4);

setTimeout(() => {
    console.log(5);
}, 3000);
