addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 26. 
// Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿ Cuántos Kg transporta ?
    

    let pesoporcaja = 748
    let cantidadcajas = 25

   let pesotrans = (pesoporcaja * cantidadcajas)
   
    console.group(`%cFormula ${pesoporcaja} * ${cantidadcajas}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`La cantidad de peso que transporta es: ${pesotrans}"`);
    console.groupEnd();

})