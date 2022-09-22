addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 28. 
//Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando presupuestos para cada cliente.
    

    let metros = Number(prompt("Ingrese la cantidad de metros cuadrados"))
    let valorpormetro = 15800

    let precio = metros * valorpormetro

   
    console.group(`%cFormula ${metros} * ${valorpormetro}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`El precio a pagará por la cantidad de metros es: ${precio}"`);
    console.groupEnd();

})