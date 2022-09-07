addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. 
    // Expresarel resultado en metros/segundo. 
    // Velocidad = espacio/tiempo.

    let espacio = 2000;
    let tiempo = 300;
    
    let velocidad = espacio/tiempo


    console.group(`%cFormula ${espacio} / ${tiempo}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Velocidad del proyectil en m/s: "${velocidad}"`);
    console.groupEnd();

    console.group(`%cFormula ${espacio} / ${tiempo}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`Velocidad del proyectil en m/s: "${velocidad}"`);
    console.groupEnd();
})