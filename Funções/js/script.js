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

let resultadoFinal = parOuImpar(6);

console.log(resultadoFinal);