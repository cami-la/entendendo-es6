
var lista = [1,2];
function criaIterator(lista){
  /*
  var proximoIndice = 0;

    return {
       next: function() {
           if(proximoIndice < array.length) {
             return { value: array[proximoIndice++], done: false };
           } else {
             return { value: undefined, done: true };
           }
       }
    };

  */
  var iterador = lista[Symbol.iterator]();
  return iterador;
}
console.log(criaIterator(lista).next());