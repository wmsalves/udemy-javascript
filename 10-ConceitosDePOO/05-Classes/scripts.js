let gato = {
  patas: 4,
  raca: "Siames",
  miar: function () {
    console.log("Miaur");
  },
};

let Siames = Object.create(gato);

Siames.miar();

Siames.raca = "Siames";

console.log(Siames.raca);
console.log(gato.raca);

let meuGato = Object.create(gato);

meuGato.raca = "Siames";

console.log(meuGato.raca);
