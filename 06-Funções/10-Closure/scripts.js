function lembrarSoma(x) {
  return function(y){
    return x + y;
  }
}

let soma1 = lembrarSoma(2);

console.log(soma1(8));

let soma2 = lembrarSoma(8);

console.log(soma2(12));

function contador (i){
  let cont = i;
  let somarContador = function() {
    console.log(cont);
    cont++
  }
  return somarContador;
}

let meuContador = contador(5);

meuContador();
meuContador();