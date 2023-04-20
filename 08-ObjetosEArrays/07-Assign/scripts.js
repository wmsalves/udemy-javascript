let carro = {
  portas: 4,
  portamalas: "200l",
  motor: "1.8",
};

console.log(carro);

let adicionais = {
  tetosolar: true,
  arcondicionado: true,
};

Object.assign(carro, adicionais);

console.log(carro);
