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

  miar() {
    console.log("Miauu");
  }
}

let siames = new Gato(4, "Siames");

console.log(siames.patas);

siames.latir();
