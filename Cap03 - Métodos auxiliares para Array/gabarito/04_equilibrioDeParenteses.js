var string1 = ")((()()())))";
var string2 = "()()()";
var string3 = ")(";

function validaParenteses(parenteses){
    var arrayParenteses = parenteses.split("");
    var balanceado = arrayParenteses.reduce(function(soma, parentese){
        if(soma < 0) {return soma;}
        if(parentese === "(" ) {return ++soma;}
        if(parentese === ")" ) {return --soma;}
    }, 0);
    return balanceado;
}
console.log(validaParenteses(string2));