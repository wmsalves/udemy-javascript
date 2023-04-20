let pessoa = {
  nome: "Wemerson",
  idade: 22,
  profissao: "Auxiliar de Operações",
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);
