var numerosInteiros = [1, 4, 9, 16, 25];

function calculaRaizesQuadradas(numerosInteiros){
    return numerosInteiros.map(function(numero){
        return Math.sqrt(numero)
    })
};
console.log(calculaRaizesQuadradas(numerosInteiros));