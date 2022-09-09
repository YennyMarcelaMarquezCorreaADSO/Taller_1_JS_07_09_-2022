addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
    // pesos y un IVA de 20%.
    
   
   

    let valor = 355
    let minutos = Number(prompt("Ingrese la cantidad de minutos: "));
    let costo = valor*minutos
    let iva = costo*0.2
    let costo2 = costo+iva 
  
    
   
    console.group(`%cFormula ${valor} * ${minutos}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`El valor de la llamada sin iva es: "${valor*minutos}"`);
    console.groupEnd();

    console.group(`%cFormula ${costo} + ${iva}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`El valor de la llamada con iva del 20% es: "${costo+iva}"`);
console.groupEnd();

})