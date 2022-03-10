var string = "soletrando";

function soletraPalavra(palavra) {
  var iteradorPalavra = palavra[Symbol.iterator]();
  var letra = iteradorPalavra.next();
  do {
    console.log(letra.value);
    letra = iteradorPalavra.next();
  } while (!letra.done);
}

soletraPalavra(string);