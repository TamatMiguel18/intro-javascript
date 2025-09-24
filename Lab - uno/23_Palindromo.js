/**
 * 
 * Miguel Antonio Tamat Ajuchan 2024024
 * 
 * Escribe una función que determine si una cadena de texto es un
palíndromo (se lee igual al derecho y al revés).
 */

const texto = "Anita lava la tina";
const textoLimpio = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const textoReverso = textoLimpio.split('').reverse().join('');

if (textoLimpio === textoReverso) {
    console.log(`"${texto}" es un palíndromo`);
} else {
    console.log(`"${texto}" no es un palíndromo`);
}