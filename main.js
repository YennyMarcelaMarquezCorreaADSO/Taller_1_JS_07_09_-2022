addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 22. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total de la compra.

    let producto1 = Number(prompt("Ingrese un valor del producto 1: "))
    let producto2 = Number(prompt("Ingrese el valor del producto 2: "))
    let producto3 = Number(prompt("Ingrese el valor del producto 3: "))
    let producto4 = Number(prompt("Ingrese el valor del producto 4: "))
    let producto5 = Number(prompt("Ingrese el valor del producto 5: "))

    let descuento1 = (producto1*5/100)
    let descuento2 = (producto2*5/100)
    let descuento4 = (producto4*2/100)
    let descuento5 = (producto5*2/100)

    let valorcondes1 = (producto1 - descuento1)
    let valorcondes2 = (producto2 - descuento2)
    let valorcondes4 = (producto4 - descuento4)
    let valorcondes5 = (producto5 - descuento5)

    let total = (valorcondes1 + valorcondes2 + producto3 + valorcondes4 + valorcondes5)

// -------------------------------------------------------------
    console.group(`%cFormula ${producto1} - ${descuento1}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`Costo producto 1 con descuento: : "${valorcondes1}"`);
    console.groupEnd();

// -----------------------------------------------------------

    console.group(`%cFormula ${producto2} - ${descuento2}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Costo producto 2 con descuento: "${valorcondes2}"`);
    console.groupEnd();

// -----------------------------------------------------------


    console.log(`Costo del tercer producto: : "${producto3}"`);

// -----------------------------------------------------------

    console.group(`%cFormula ${producto4} - ${descuento4}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`Costo del cuarto producto con descuento: "${valorcondes4}"`);
    console.groupEnd();

// -----------------------------------------------------------

    console.group(`%cFormula ${producto5} - ${descuento5}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`Costo del quinto producto con descuento: : "${valorcondes5}"`);
    console.groupEnd();

// -----------------------------------------------------------

    console.group(`%cFormula (${valorcondes1} + ${valorcondes2} + ${producto3} + ${valorcondes4} + ${valorcondes5})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`Valor total: : "${total}"`);
    console.groupEnd();

// --------------------------------------------------------------

})