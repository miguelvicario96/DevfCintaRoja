//Promesas
//Algo que no sabemos si sucedera

//Número Aleatorio
// 0 | 1   (0 = 0%  |  1 = 100%)
// console.log(Math.round(Math.random() * 100));

//Redondeo
// console.log(Math.floor(24.5651));
// console.log(Math.ceil(24.5651));
// console.log(Math.round(24.5651));

const promesaCumple = new Promise((resolve, reject) => {

    setTimeout(() => {
        const number = (Math.round(Math.random() * 100));
        if (number > 50) {
            resolve('📱');
        } else if(number < 10){
            reject('No Tengo Dinero');
        } else {
            reject('Te Quedaste Sin Cel');
        }
    }, 5000);
});

//.then() es el método que se ejecuta cuando la promesa se cumple
//.catch() es el método que se ejecuta cuando la promesa no se cumple
promesaCumple
    .then((celular) => {console.log(celular);})
    .catch((razon) => {console.log(razon);})

