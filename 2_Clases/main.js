//Clase

//Las clases inician con mayúscula
class Auto {

    //Siempre es el primero en ejecutarse
    constructor(color, ruedas, motor, velocidad) {
        this.color = color;
        this.ruedas = ruedas;
        this.motor = motor;
        this.velocidad = velocidad;
        this.transmision = 'Manual';
        this.encendido = false;
    }

    //Método Setter
    switch() {
        this.encendido = !this.encendido;
        if (this.encendido) {
            return "El Auto " + this.color + " Esta Encendido";
        } else {
            return "El Auto " + this.color + " Esta Apagado";
        }
    }

    //Métodos Getter
    obtenerTransmision() {
        return this.transmision;
    }

    obtenerResumen() {
        if (this.motor === 'V8') {
            return "El Auto " + this.color + " Tiene " + this.ruedas + " Ruedas Y Tiene Un Motor " + this.motor;
        } else {
            return "No Necesita Gasolina";
        }
    }
}

var miAuto = new Auto('Blanco', 5, 'V8', '300 KM');
console.log(miAuto);
console.log(miAuto.switch()); //Encendido es true
console.log(miAuto.switch()); //Encendido es false
console.log(miAuto.obtenerTransmision());
console.log(miAuto.obtenerResumen());


//Persona
class Persona {
    constructor(nombre, edad, genero, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / this.altura;
    }

    esMayorDeEdad() {
        return this.edad > 18 ? "Es Mayor de Edad" : "Es Menor de Edad";
    }
}

var persona = new Persona('Miguel', 24, 'Hombre', 70, 176);
console.log(persona.calcularIMC());
console.log(persona.esMayorDeEdad());


//Cuenta
class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(numero) {
        if ((this.cantidad + numero) >= 10 && (this.cantidad + numero) <= 900) {
            this.cantidad += numero;
            return "Cantidad " + this.cantidad;
        } else {
            return "Limites Excedidos";
        }
    }

    retirar(numero) {
        if ((this.cantidad - numero) >= 10 && (this.cantidad - numero) <= 900) {
            this.cantidad -= numero;
            return "Cantidad " + this.cantidad;
        } else {
            return "Limites Excedidos";
        }
    }
}

var cuenta = new Cuenta('Miguel', 800);
console.log(cuenta.ingresar(100));
console.log(cuenta.retirar(891));
