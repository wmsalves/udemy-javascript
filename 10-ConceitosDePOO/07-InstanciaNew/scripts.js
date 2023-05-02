function gato(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.miar = function() {
    console.log("Miauu");
  }
}

let ragdoll = new gato('Ragdoll', 4, 'Branco');

ragdoll.miar();