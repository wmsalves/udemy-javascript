class Gato {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  miar() {
    console.log("Miau");
  }

  get getCor() {
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }
}

let american = new Cachorro("American Shorthair", "Listrado");

console.log(american);

pastor.setCor = "Listrado Branco";

console.log(american.getCor);
