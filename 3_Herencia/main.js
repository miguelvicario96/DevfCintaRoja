//Herencia
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super

//Superclase
class Mascota {
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.patas = patas;
        this.cerebro = true;
    }

    alimentarse() {
        return this.nombre + " Se Alimenta";
    }
}

let mascota = new Mascota('Firulais', 4);
console.log(mascota.nombre);
console.log(mascota.alimentarse());


//Subclase de Mascota
class Perro extends Mascota {
    constructor(nombre, patas, cola, raza) {
        super(nombre, patas);
        this.ladra = true;
        this.cola = cola
        this.raza = raza
    }

    truco() {
        return "El " + this.raza + " " + this.nombre + " Hace Un Truco";
    }
}

let perro = new Perro('Meteoro', 4, true, 'Bulldog');
console.log(perro.nombre);
console.log(perro.alimentarse());
console.log(perro.truco());


//Subclase de Mascota
class Serpiente extends Mascota {
    constructor(nombreSerpiente, venenosa) {
        super(nombreSerpiente, 0);
        this.ladra = true;
        this.venenosa = venenosa
    }
}

let serpiente = new Serpiente('Snape', 4, true);
console.log(serpiente.nombre);
console.log(serpiente.patas);
console.log(serpiente.alimentarse());