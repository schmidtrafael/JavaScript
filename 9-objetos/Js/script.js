var obj = {
    nome: "Rafael",
    idade: 29,
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

console.log("Meu nome: " + obj.nome + ", " + "Minha idade: " + obj.idade + ", " + "Minha profissão: " + obj.profissao);

obj.nome = "Felipe";
obj.idade = 98;
obj.profissao = "Lutador de MMA";

console.log("Meu nome: " + obj.nome + ", " + "Minha idade: " + obj.idade + ", " + "Minha profissão: " + obj.profissao);
