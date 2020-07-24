var {Largometraje} = require("./Largometraje");

class Pelicula extends Largometraje {
    constructor(titulo, director, duracion, genero) {
        super(titulo, director, duracion);
        this.genero = genero;
        this.precio = 50;
    }
}

let yaNoEstoyAqui = new Pelicula('Ya No Estoy Aquí','?', 120,'Drama');
let sangrePorSangre = new Pelicula('Sangre Por Sangre', '?', 150, 'Accion');

module.exports = {yaNoEstoyAqui, sangrePorSangre};