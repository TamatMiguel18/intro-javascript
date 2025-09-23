const numeroSecreto = Math.floor(Math.random() * 10 + 1)
 
const numeroJugador = parseInt(prompt("Adivina el numero secreto entre 1 y 10"))

console.log(numeroSecreto)

if (numeroJugador == numeroSecreto){
    console.log("Correcto, has adivinado el numero")
} else if(numeroJugador < numeroSecreto){
    console.log("El numero es mas grande.")
} else if(numeroJugador > numeroSecreto){
    console.log("El numero es mas pequeno")
} else {
    console.log(":( lastima, el numero era: "+numeroSecreto)
}

