var listaCheia = [0, 1, 2];
var listaVazia = [];

function isListaVazia(lista) {
  /*var iteradorListas = lista[Symbol.iterator]();
  var numero = iteradorListas.next();
  do {
    if (numero.done){
      return true;
    } 
    else{
      return false;
    } 
  } while (!numero.done);*/
  return lista[Symbol.iterator]().next().done;
}

console.log(isListaVazia(listaCheia));
console.log(isListaVazia(listaVazia));