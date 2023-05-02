class Gato {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  miar() {
    console.log("Miauu");
  }
}

Gato.prototype.patas = 4;

let american = new Gato("American", "Listrado");

console.log(american.patas);

american.miar();
