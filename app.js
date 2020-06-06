/**
 * Practica de manejo de fechas
 */
function datePractica() {
    const diaHoy = new Date();


    let valor;
    valor = diaHoy.getMonth();
    diaHoy.setFullYear(2016);
    valor = diaHoy.getFullYear();

    console.log(valor);
}

/**
 * Practica de condicionales. El parametro por defecto tiene valor de 4.5 
 * en caso de no resivir ningún valor.
 * @param {*} notaP 
 */
function condicionalPractica(notaP = 4.5) {
    let nota = notaP;
    //typeof nota == undefined Metodo anterior
    if (nota) {
        console.log(`Aprovó con nota de ${nota}`); //Son necesarias esas commillas
    }
    else console.log('No hay nota disponibles');

    //condicionalPractica();  Es el llamado por defecto.
    //condicionalPractica(nota); Llamado con parametro

}
/**
 * Como declarar funciones como una expreción. 
 */
function funtionExpression(a, b) {

    const suma = function (a = 2, b = 3) {
        return a + b;
    }
    console.log(suma());
}
/**
 * Las funciones IIFE se invocan inmediatamente, sin necesidad de llamarlas.
 */
function funcionesIife() {
    (function () {
        console.log('Esto es IIFE ');
    })();

    (function (a = 2, b = 3) {
        let suma = a + b;
        console.log(suma);
    })(3.1, 3.2);//Aquí es donde van los parametros. Puede estar vacio y tomara
    //valores por defecto.

}
/*
 * Los obejetos pueden tener funciones dentro, OJO formato JSON
 */
function funcionesEnObjetos() {
    const cancion = {
        reproducir: function (nombre='Default') {
            console.log(`Reproduciendo ${nombre}`);
        },//ojito con la coma. 
        pausar: function () {
            console.log(`Pause`);
        }
    }
    //LLamado de las funciones. 
    cancion.reproducir();
    cancion.pausar();
    cancion.reproducir('Rachmaninov Piano Concerto No 2');
    cancion.pausar();
}

