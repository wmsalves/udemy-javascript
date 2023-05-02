const pessoa = {
  dedos: 20,
};

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.dedos);

console.log(pessoaNova.hasOwnProperty("dedos"));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);
