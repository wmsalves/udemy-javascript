function checarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    alert("Por favor, informe apenas valores numéricos para o programa");
  } else {
    return number;
  }
}

checarNumero(5);
checarNumero("teste");

let number = prompt("Informe um número");

checarNumero(number);
