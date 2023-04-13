let nome = "Wemerson";

for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nome = "Danilo";
  }

  if (i == 5 && nome == "Danilo") {
    console.log("O nome é Danilo, pode parar");
    break;
  }

  console.log(i);
}
