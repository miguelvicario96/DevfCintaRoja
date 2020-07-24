class Banda {                               //Género Por Default
    constructor(nombre, web, anio, genero = 'Rock') {
        this.nombre = nombre;
        this.web = web;
        this.anio = anio;
        this.genero = genero;
    }
}

module.exports = {Banda};