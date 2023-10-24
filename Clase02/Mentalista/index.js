let numeroSecreto = parseInt(Math.random()*1000 + 1);

while (numeroSecreto != numeroDigitado) {
   var numeroDigitado = prompt("Ingrese un número entre 1 y 1000")
    if (numeroSecreto == numeroDigitado) {
        alert("Acertaste")
    } else if (numeroSecreto > numeroDigitado) {
        alert(`Te equivocaste .. el número secreto es mayor que el número ${numeroDigitado}`)
    } else if (numeroSecreto < numeroDigitado) {
        alert(`Te equivocaste .. el número secreto es menor que el número ${numeroDigitado}`)
    }
}