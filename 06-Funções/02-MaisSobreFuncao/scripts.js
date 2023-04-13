function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(1, 2, 3));

const mult = multiplicarTresNumeros(4, 5, 6);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(23, true));
console.log(podeDirigir(25, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(14, false));
