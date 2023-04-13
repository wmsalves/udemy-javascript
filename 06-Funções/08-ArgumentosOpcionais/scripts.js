function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log("Para se fazer uma soma, é necessário dois valores");
  } else {
    return a + b;
  }
}

console.log(soma(5));
console.log(soma(5, 5));

function saudacao(nome, idade) {
  if (idade === undefined) {
    console.log("Olá " + nome);
  } else {
    console.log("Olá " + nome + " você tem " + idade + " anos");
  }
}

saudacao("Wemerson");
saudacao("Wemerson", 20);
