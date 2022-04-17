var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteudo inserido pelo JS no paragrafo!")

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

