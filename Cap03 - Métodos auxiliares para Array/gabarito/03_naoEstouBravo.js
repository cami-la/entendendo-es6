//Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

var caps = ['oi', 'tudo', 'bem?'];
var uppercase = caps.map(function(palavras){
    return palavras.toUpperCase();
});
console.log(uppercase);