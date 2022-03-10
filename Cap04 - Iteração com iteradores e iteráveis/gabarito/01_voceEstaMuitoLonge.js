var ruas = [{
  nome: 'Rua 1',
  tamanho: 2500
},
{
  nome: 'Rua 2',
  tamanho: 3400
},
{
  nome: 'Rua 3',
  tamanho: 1400
}
];

function calculaDistancia(ruas) {
var iteradorRuas = ruas[Symbol.iterator]();
var distanciaTotal = 0;
var rua = iteradorRuas.next();
do {
  distanciaTotal += rua.value.tamanho;
  rua = iteradorRuas.next();
}
while (!rua.done);

return distanciaTotal;
}

console.log(calculaDistancia(ruas));