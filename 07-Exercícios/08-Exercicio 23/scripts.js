function tamanhoTexto(texto){
  if(texto.length > 10){
    console.log("Texto além do limite");
  } else {
    console.log("Texto dentro do limite");
  }
  console.log(texto.length)
}

tamanhoTexto("Teste");
tamanhoTexto("Apenas um teste para o texto alem do limite");