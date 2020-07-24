var {nuestroPlaneta, elSembrador} = require('./Documental');
var {yaNoEstoyAqui, sangrePorSangre} = require('./Pelicula');

class Cine {
    constructor(cadena, salas, ubicacion) {
        this.cadena = cadena;
        this.salas = salas;
        this.ubicacion = ubicacion;
    }

    reproducirLargometraje(largometraje) {
        if (largometraje.precio < 80) {
            //Película
            return "Se Esta Reproduciendo '" + largometraje.titulo + "' Y Su Género Es: " + largometraje.genero;
        } else {
            //Documental
            return "Se Esta Reproduciendo '" + largometraje.titulo + "' Y Su Narrador Es: " + largometraje.narrador;
        }
    }
}

let cine = new Cine('Cinepolis', 9, 'Paseo Acoxpa');
console.log(cine);

//Documental
console.log(cine.reproducirLargometraje(nuestroPlaneta));

//Película
console.log(cine.reproducirLargometraje(yaNoEstoyAqui));

