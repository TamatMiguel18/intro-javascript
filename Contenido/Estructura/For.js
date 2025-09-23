let lista = ["eat", "sleep", "code", "repeat"]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])    
}

let canasta = ["Manzana", "Pera", "Naraja", "Uva"]
for (const Fruta of canasta) {
    console.log(Fruta)
}


const listaDeCompras = {
    nombre: "Manzana",
    costo: 3.4,
    marca: "Mazanita Feliz"
}
for (Fruta in listaDeCompras) {
    console.log(`${Fruta} : ${listaDeCompras[Fruta]}`)
}

for (Fruta of listaDeCompras) {
    console.log(Fruta)
    
}