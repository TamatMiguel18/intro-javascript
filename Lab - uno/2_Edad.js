/**
 *
 * Miguel Antonio Tamat Ajuchan 2024024 
 * 
 * 2. Escribe un programa que solicite la edad de un usuario y determine si
 * es mayor de edad (18 años o más).
 */

const edad = -9;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad < 18 && edad >= 0) {
    console.log("Eres menor de edad");
} else {
    console.log("Edad no válida");
}