addEventListener("DOMContentLoaded", ()=>{
// //     // Ejercicio 13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil 
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundos.

    
   
   

    let distancia = Number(prompt("Ingrese la distancia: ",80))
    let tiempo = Number(prompt("Ingrese el tiempo: ", 1.5));
    let velocidad = ((distancia*1000)/(tiempo*3600))
  
    
   
    console.group(`%cFormula ((${distancia} * ${1000})/(${tiempo}*${3600})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`La velocidad del automovil en m/s es: "${velocidad}"`);
    console.groupEnd();
})