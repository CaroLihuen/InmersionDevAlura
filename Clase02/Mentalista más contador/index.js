const jugar = prompt('¿Quieres jugar? (Si/No)')
const gracias = alert("Gracias! Nos vemos en el próximo juego!")

if (jugar == 'Si') {
    let numeroSecreto = parseInt(Math.random() * 500 + 1);
    let intentos = 0;
    let numeroDigitado;
    let intentosMax = 10;

    while (intentos < intentosMax) {
        numeroDigitado = prompt(`Ingrese un número entre 1 y 500. Tienes ${intentosMax} intentos!`)
        
        intentos++;
        console.log(intentos)
        let intentosRestantes = intentosMax - intentos;

        if (numeroSecreto == numeroDigitado) {
            alert(`Acertaste en ${intentos} intentos`);
            break;
        } else if (numeroSecreto > numeroDigitado) {
            alert(`Te equivocaste .. el número secreto es mayor que el número ${numeroDigitado}. Te quedan ${intentosRestantes} intentos.`)
        } else if (numeroSecreto < numeroDigitado) {
            alert(`Te equivocaste .. el número secreto es menor que el número ${numeroDigitado}. Te quedan ${intentosRestantes} intentos.`)
        }
    }

    if(intentos == intentosMax){
        alert(`Agotaste tus ${intentosMax} intentos. El número secreto era ${numeroSecreto}`)
    }
} else {
    gracias 
}

