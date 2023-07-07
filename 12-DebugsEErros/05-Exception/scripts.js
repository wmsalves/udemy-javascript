function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("O parâmetro nome precisa ser n formato string");
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao("Wemerson");
saudacao(22);

console.log("teste");
