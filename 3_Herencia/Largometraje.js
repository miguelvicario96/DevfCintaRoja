class Largometraje {
    constructor(titulo, director, duracion) {
        this.titulo = titulo;
        this.director = director;
        this.duracion = duracion + " minutos";
    }
}

let ejemplo = new Largometraje('Ejemplo', 'Desconocido', 120);

//Destructuración Objetos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
var {titulo} = ejemplo;
console.log(titulo);

module.exports = {Largometraje};