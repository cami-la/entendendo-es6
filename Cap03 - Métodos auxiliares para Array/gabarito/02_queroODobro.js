//Exemplo: dobrar([1,2,3]) → [2,4,6]

var dobrar = [1,2,3];
var dobro = dobrar.map(function(number){
    return number*2;
});
console.log(dobro);