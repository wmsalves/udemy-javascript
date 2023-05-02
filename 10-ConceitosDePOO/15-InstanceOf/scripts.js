class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let elefante = new Mamifero(4);

console.log(elefante.patas);

class Gato extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  miau() {
    console.log("Miauu");
  }
}

let american = new Gato(4, "American");

console.log(american.patas);

american.miar();

console.log(new Gato() instanceof Mamifero);

console.log(elefante instanceof Mamifero);
