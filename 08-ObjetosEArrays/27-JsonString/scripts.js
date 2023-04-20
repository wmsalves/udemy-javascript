let pessoa = {
  nome: "Wemerson",
  idade: 22,
  profissao: "Auxiliar de Operações",
  hobbies: ["Video game", "Series", "Anime"],
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
