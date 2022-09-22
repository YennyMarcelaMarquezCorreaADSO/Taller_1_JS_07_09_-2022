addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 24
    // Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le sobran $91000. ¿cuánto dinero tenía?
    

    let llavesporunidad = 11500
    let bomba = 1168000
    let cajaspernosuni = 87000
    let sobra = 91000

   let juegosdellaves = llavesporunidad * 5
   let cajas = cajaspernosuni * 3

   let total = (juegosdellaves + bomba + cajas + sobra)

    console.group(`%cFormula ${juegosdellaves} + ${bomba} + ${cajas} + ${sobra}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`La cantidad de dinero que tenia es: ${total}"`);
    console.groupEnd();

})