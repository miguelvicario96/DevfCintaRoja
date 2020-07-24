var {Largometraje} = require("./Largometraje");

class Documental extends Largometraje {
    constructor(titulo, director, duracion, narrador, patrocinador) {
        super(titulo, director, duracion);
        this.precio = 100;
        this.narrador = narrador;
        this.patrocinador = patrocinador;
    }
}

let nuestroPlaneta = new Documental('Nuestro Planeta', 'Jose Sanchez', 60, 'Pedro Lopez', 'Jumex');
let elSembrador = new Documental('El Sembrador', 'Carlos Juarez', 90, 'Mario Hinojosa', 'NatGeo');

module.exports = {nuestroPlaneta, elSembrador};