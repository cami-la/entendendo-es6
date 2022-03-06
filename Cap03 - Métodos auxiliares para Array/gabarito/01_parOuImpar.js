/*var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}*/

var numeros = [0,1,2,3,4,5];
numeros.forEach(function(numero) {
    if(numero % 2 === 0) console.log(numero + ' é par');
    else console.log(numero + ' é ímpar');
});