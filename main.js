addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    // ingresando el costo de los medicamentos calcules el descuento y el precio final.
    

    let medicamento = Number(prompt("Ingrese el valor del medicamento: "))
    let descuento = 0.1
    let iva= (medicamento*descuento)
    let valor = (medicamento - iva)

  
    console.log(`valor inicial del medicamento: "${medicamento}"`);

    console.group(`%cFormula (${medicamento} - ${iva})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Precio final con descuento aplicado: "${valor}"`);
    console.groupEnd();
})