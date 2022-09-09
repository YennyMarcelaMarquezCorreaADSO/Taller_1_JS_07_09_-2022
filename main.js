addEventListener("DOMContentLoaded", ()=>{
    // Calcular el sueldo de un empleado dados como datos de entrada: el nombre, hrs. De trabajo y el pago
    // en hora. Pagohora=15300


    let nombre =  (prompt("Ingrese su nombre: "))
    let horas =  Number(prompt("Cantidad de horas trabajadas: ",8))
    let diasMes = 30
    let pagoHora = 15300
    let suel = horas*pagoHora
    let sueldo = suel*diasMes
    

    console.log(`Nombre empleado: "${nombre}"`);
    console.log(`Cantidad de horas trabajadas: "${horas}"`);
 
    console.group(`%cFormula ${suel} * ${diasMes}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Sueldo del empleado: "${sueldo}"`);
    console.groupEnd();
})