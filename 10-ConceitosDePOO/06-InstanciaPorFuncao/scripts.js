function criaCachorro(raca, patas, cor) {
  let gato = Object.create({});
  gato.raca = raca;
  gato.patas = patas;
  gato.cor = cor;
  gato.miar = function () {
    console.log("Miauu");
  };
  return gato;
}

let siames = criaGato("Siames", 4, "Branco e Preto");

console.log(siames);

siames.latir();
