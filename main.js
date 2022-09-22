addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 27. 
//Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma 2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a Lorena?
    

    let tapas = Number(prompt("Ingrese la cantidad de tapas que hay"))

    let Martin = (2/3)*tapas
    let Jairo = (1/4)*tapas
    let suma = Martin + Jairo
    let Lorena = (tapas - suma)
   
    console.group(`%cFormula ${tapas} - ${suma}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`La cantidad de tapas que le corresponden a Lorena es: ${Lorena}"`);
    console.groupEnd();

})