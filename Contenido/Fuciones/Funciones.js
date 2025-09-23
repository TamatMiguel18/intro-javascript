function cacularPrecioDeDescuento(precio, descuentoenprocentaje) {
    const decuento = (precio*descuentoenprocentaje)/100
    const nuevoPrecio = precio - decuento;

    return nuevoPrecio
}

const precioOriginal = 1000;
const descuento = 18;
const precioFinal = cacularPrecioDeDescuento (precioOriginal, descuento)

console.log(`Precio Original: Q` + precioOriginal);
console.log(`Descuento: ` + descuento + `%` );
console.log(`Precio con Descuento: Q` + precioFinal);