//              0   1   2   3   4
const array = [10, 22, 33, 54, 12];

//Iterar arreglo => MANERA IMPERATIVA
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Iterar arreglo => MANERA DECLARATIVA
array.forEach(element => {
    console.log(element);
});



///////////////////////////////////////////////////////
//MANERA IMPERATIVA
const nuevoArreglo = [];
for (let i = 0; i < array.length; i++) {
    nuevoArreglo[i] = `${i} - ${array[i]}`;
}

console.log(nuevoArreglo);


//MANERA DECLARATIVA
const nuevoArreglo2 = array.map((value, index) => `${index} - ${value}`);
console.log(nuevoArreglo2);



///////////////////////////////////////////////////////
const paises = ['Mexico', 'Colombia', 'Peru', 'Costa Rica', 'Republica Dominicana', 'Venezuela'];

//MANERA IMPERATIVA
const nuevoPaises = [];
for (let i = 0; i < paises.length; i++) {
    if (paises[i].length <= 6) {        
        nuevoPaises.push(paises[i]);
    }
}

console.log(nuevoPaises);


//MANERA IMPERATIVA
const nuevoPaises2 = paises.filter(value => value.length <= 6);
console.log(nuevoPaises2);

