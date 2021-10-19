var elementoTela = document.getElementById("resultado");
var op0 = "Faça o valor pensado + 5 - 2 + 7 + 4 + 8 - 5 + 3 - o valor inserido, o resultado deverá ser = 20";
var op1 = "Faça o valor pensado + 250 - 7 + 3 + 4 - 79 x 2 - o valor inserido, o resultado deverá ser = 342";
var op2 = "Faça o valor pensado - 7  x 5 + 70 : 7, - o valor inserido, o resultado deverá ser = 5";

function Chutar() {
  var numeropensadoMaquina = parseInt(Math.random() * 3);
  console.log(numeropensadoMaquina);
  if (numeropensadoMaquina == 0) {elementoTela.innerHTML = op0;} else if (numeropensadoMaquina == 1) {elementoTela.innerHTML = op1;} else if (numeropensadoMaquina == 2) {elementoTela.innerHTML = op2;}
}
