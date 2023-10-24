var pesoMexicano;
var valorDolar = 0.06;
/*let inpValor = document.getElementById("valor")
console.log(inpValor.value)
falta desarrollar botón e input
let btn = document.getElementById("busqueda")
console.log(btn)*/
function conversor(valor) {
  //evt.preventDefault()evt,
  let total;
  pesoMexicano = valor;
  total = pesoMexicano * valorDolar;

  return total.toFixed();
   
} 

//btn.addEventListener("click",conversor)

alert(`El resultado es ${conversor(200)}`);