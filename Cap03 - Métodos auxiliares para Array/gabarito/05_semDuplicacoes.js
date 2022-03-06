
var numeros = [1,2,3,3,4,5];
function removeDuplicatas(numeros){
    return numeros.reduce(function(anterior, valor){
        var achouDuplicata = anterior.find(function(valor2){
            return valor === valor2;
        });
        if(!achouDuplicata){anterior.push(valor);}
        return anterior;
    }, []);
}
console.log(removeDuplicatas(numeros));