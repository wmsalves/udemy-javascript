class Gato {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  miar() {
    console.log("Miauu");
  }
}

Gato.prototype.raca = "SRD";
Gato.prototype.patas = 4;

let american = new Cachorro("American", "Listrado");

console.log(american.patas);

american.miar();

console.log(Gato.prototype.raca);
console.log(american.raca);
