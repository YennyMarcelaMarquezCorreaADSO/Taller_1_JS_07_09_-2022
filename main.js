addEventListener("DOMContentLoaded", ()=>{
// Ejercicio 16. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
// producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
// tiempo y de un producto a otro, este dato se lee por teclado.


    let precio =  Number(prompt("Precio total del producto: "))
    let iva =  Number(prompt("Ingrese el porcentaje de iva: "))
    let precioiva = precio * (iva/100)
    let precioTotal = precio + precioiva

    
    console.log(`valor  de iba: "${iva}"`);
    console.group(`%cFormula (${precio} + ${precioiva})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Precio total del producto: "${precioTotal}"`);
    console.groupEnd();
})