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

let patas = Symbol();

Gato.prototype[patas] = 4;

let american = new Gato("American", "Listrado");

american.miau();

console.log(Gato.prototype.raca);
console.log(american.raca);

// acessando symbol
console.log(Gato.prototype[patas]);

console.log(american[patas]);
