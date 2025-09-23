/**
 * Crea un programa que calcule la suma de todos los números del 1 al
50.
 */

let suma = 0;

for (let i = 1; i <= 50; i++) {
    suma += i; 
    console.log(suma);
}

console.log("La suma total es: " + suma);