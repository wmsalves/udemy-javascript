let onibus = {
  rodas: 8,
  limitePassageiros: 38,
  portas: 3,
};

delete onibus.rodas;

console.log(onibus.rodas);

onibus.janelas = 24;

console.log(onibus);
console.log(onibus.janelas);
