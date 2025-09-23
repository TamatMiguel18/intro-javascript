/**
 * Conversiones 
 * 
 * Explicit Tipe Casting
 */

const string = "123"
const integer = parseInt(string)

//console.log(string)
//console.log(integer)

const flotante = parseFloat("3.14159")
//console.log(typeof flotante)

const binario = "1010"
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = "CAFE"
const decimalh = parseInt(hexa, 16)
//console.log(decimalh)


//Implicit Type Casting 

const resultado = "5" + 3
console.log(resultado)
console.log(typeof resultado)

const sumaBoolean = "5" + true
console.log(sumaBoolean)
console.log(typeof sumaBoolean)

const sumaConNumero = true + 2
console.log(sumaConNumero)
console.log(typeof sumaConNumero)

const valorString = "29"
const valorNumero = 11
const valorBoolean = true
console.log(valorString + valorString)
console.log(valorNumero + valorString)
console.log(valorBoolean + valorString)

console.log(valorNumero + valorNumero)
console.log(valorBoolean + valorNumero)
console.log(valorBoolean + valorString)

console.log( (valorBoolean + valorNumero))
console.log( (valorBoolean + valorString))
console.log( (valorBoolean + valorBoolean))