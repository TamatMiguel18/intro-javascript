/**
 * TIPO DE DATO number
 */
 
//1. entero y decimal
const entero = 42
const decimal = 3.14
 
//2. notacion cientifica
const cientifica = 5e3
 
//3. Infinitos y NaN(not a number)
const infinito = Infinity
const noEsNumero = NaN
 
//4. Operaciones Aritmeticas
//1. Suma, resta, multiplicacion y division
const suma = 5 + 6
const resta = 6 - 5
const multiplicacion = 4 * 6
const division = 12 / 6
 
//2. modulo y exponenciacion
const modulo = 14 % 8
const exponenciacion = 2**4
 
// 5. PRESICION, javascript tiene problemas de calculo
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado == 0.3)
 
//OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(4)
const valorAbsoluto = Math.abs(-2)
const aleatorio = Math.random()
let numero = aleatorio * 10 + 20
 
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(Math.trunc(numero))
 
//ejemplo
const numero2 = 2
const Boolean = true
console.log(numero2 + Boolean)