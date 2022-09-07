addEventListener("DOMContentLoaded", ()=>{
    // 5. Escribir un programa que calcule la longitud y el área de una circunferencia: Radio = 4
    // Longitud de la circunferencia = 2 * PI * radio
    // Área de la circunferencia = PI * radio˄2


    let radio = Number(prompt("Ingrese el radio de la circunferencia", 5));


    console.group(`%cFormula ${2} * ${Math.PI} * ${radio}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Longitud de la circunferencia : "${2 * Math.PI * radio}"`);
    console.groupEnd();

    console.group(`%cFormula ${Math.PI} * ${Math.pow(radio, 2)}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
        console.log(`Área de la circunferencia : "${Math.PI * Math.pow(radio, 2)}"`);
    console.groupEnd();
})