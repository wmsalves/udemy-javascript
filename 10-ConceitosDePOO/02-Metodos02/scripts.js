const gato = {
  raca: "Siames",
  miar: function () {
    console.log("Miauuu");
  },
  barulho: function () {
    console.log("snff");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return "A raça do gato é " + this.raca;
  },
};

console.log(gato.raca);

cachorro.setRaca("Siames");

console.log(gato.raca);

console.log(gato.getRaca());
