function recursao(n) {
  if (n - 1 < 2) {
    console.log("Recursão parada");
  } else if (n % 2 != 0) {
    console.log("Número Ímpar: " + n);
    recursao(n - 1);
  } else {
    console.log("Número Par: " + n);
    recursao(n - 2);
  }
}

recursao(100);
recursao(99);
