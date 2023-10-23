var pesoMexicano;
var valorDolar = 0.06;

function conversor(valor) {
  let total;
  pesoMexicano = valor;
  total = pesoMexicano * valorDolar;

  return total.toFixed();
}

alert(`El resultado es ${conversor(200.4)}`);