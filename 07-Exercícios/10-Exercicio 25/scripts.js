function imprimePar(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

imprimePar(100);
imprimePar(99);
