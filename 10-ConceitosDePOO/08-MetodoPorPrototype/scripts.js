function Gato(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Gato.prototype.miar = function () {
  console.log("Miauu");
};

Gato.prototype.barulho = function () {
  console.log("snff");
};

let ragdoll = new Gato("Ragdoll", 4, "Branco");

ragdoll.miar();
ragdoll.barulho();
