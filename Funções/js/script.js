/*
Função para exemplo usando par ou impar.
*/
function parOuImpar(numeroDesejado) {
    if (numeroDesejado%2==0) {
        return ("Par")
    } else {
        return ("Impar")
    }
}

console.log(parOuImpar(6));
console.log("____________________________")
/*
Função para somar dois valores e caso ZERO em uma das 
entradas o valor já estará no padrão ZERO.
*/
function somaValores(n1=0, n2=0) {

    return n1 + n2;
    
}

console.log(somaValores(7));
