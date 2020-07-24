//Función
//Una función que determine el área de un trapecio
function areaTrapecio(baseSuperior, baseInferior, altura) {
    baseSuperior = parseFloat(baseSuperior);
    baseInferior = parseFloat(baseInferior);
    altura = parseFloat(altura);

    return ((baseSuperior + baseInferior) / 2) * altura;
}

console.log(areaTrapecio(15, 12, 6));


//Objeto Literales
var perro = {
    nombre: 'Ayudante de Santa',
    raza: 'Galgo',
    edad: 30,
    vivo: true,
    juguetes: ['Pelota', 'Peluche', 'Hueso'],
    familia: {
        padre: 'Homero',
        madre: 'Marge',
        hermano: 'Bart',
        hermana: 'Lisa'
    },

    //Métodos
    juega: function(indice) {
        if (indice < this.juguetes.length) {
            console.log('El Perro Juega Con: ' + this.juguetes[indice]);
        } else {
            console.log('El Perro No Encontró El Juguete');
        }
    }
}

console.log(perro);
console.log(perro.nombre);
console.log(perro.juguetes[0]);
console.log(perro.familia.hermano);
perro.juega(1);


//Pingüino
var myPenguin = {
    character: 'Whiteblack',
    origin: 'Whiteblack the Penguin Sees the World',
    author: 'H. A. Rey and Margret Rey',
    notes: "Children's book about a travelling penguine",
    saludar: function() {
        console.log('Hola, soy un pingüino y mi nombre es ' + this.character);
    }
}

console.log('Hola, soy un pingüino y mi nombre es ' + myPenguin.character);

myPenguin.puedeVolar = false;
console.log(myPenguin.puedeVolar);

myPenguin.graznar = function() {
    console.log('Kaww kaww!!');
}
myPenguin.graznar();

myPenguin.saludar();



