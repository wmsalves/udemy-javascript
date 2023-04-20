let pessoa = {
  nome: "Wemerson",
};

let pessoa2 = pessoa;

let pessoa3 = {
  nome: "Wemerson",
};

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Danilo";

console.log(pessoa.nome);

pessoa.nome = "Victor";

console.log(pessoa2.nome);
