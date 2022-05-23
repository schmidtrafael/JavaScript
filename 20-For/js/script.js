/*for (var i = 0; i < 10; i++){
    console.log("Repetindo for: "+ i)
}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++){
    console.log(arr[j]);
}

for(var x = 50; x < 100; x *= 2){
    console.log(x);
<<<<<<< HEAD
}

FUP que leia 2 valores. Agora descubra qual é o maior, 
e qual eh o menor. Depois disso, retorne para todos 
os números do intervalo, quais sao pares, e quais sao 
impares.

Input: 4 e 1.
Deve retornar “1 é impar. 2 é par. 3 é impar, 4 é par.”).
*/


var value = prompt("Digite");

function exibirTipo(limite) {
    for (let n = 1; n <= limite; n++){
        if ( n % 2 == 0)
            document.write(n,' é par, ');
        else
            document.write(n,' é impar, ');
        }
    }
exibirTipo(value)

let num = prompt("Digite!");


for (var x = 0; x < num; x++){
    console.log(x);
}

let number = 5;
for(let i=15; i>=number; i--) {
    console.log(i);
}