let idade = 22;

if(idade == 22) {
  console.log(`A idade é: ${idade}`);
}

if(idade > 25) {
  console.log("A idade é maior que 25");
}

let nome = "Wemerson";

if(nome == "Wemerson" && idade > 10) {
  console.log("Liberado normalmente!");
}

let passaporte = true;

if((nome == "Wemerson" && idade > 30) || passaporte == true) {
  console.log("Cliente com passaporte liberado!");
}