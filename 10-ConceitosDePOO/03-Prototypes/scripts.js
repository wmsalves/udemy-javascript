const pessoa = {
  dedos: 20,
};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty("dedos"));
