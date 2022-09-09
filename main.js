addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
    // cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
    // sueldo del vendedor?.
    


    let sueldoBase = Number(prompt("Ingrese el sueldo base: "))
    let v1 = 25800
    let v2 = 50500
    let v3 = 60000
    let comision = 0.1

    let comision1 = (v1 * comision)
    let comision2 = (v2 * comision)
    let comision3 = (v3 * comision)

    let totalVen1 = (v1 + comision1)
    let totalVen2 = (v2 + comision2)
    let totalVen3 = (v3 + comision3)

    let totalComision = (totalVen1 + totalVen2 + totalVen3)
    let sueldo = (sueldoBase + totalVen1 + totalVen2 + totalVen3)

    console.log(`Sueldo inicial: "${sueldoBase}"`);

    console.group(`%cFormula (${totalVen1} + ${totalVen2} + ${totalVen3})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Comision: "${totalComision}"`);
    console.groupEnd();

    console.group(`%cFormula (${sueldoBase} + ${totalVen1} + ${totalVen2} * ${totalVen3})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Sueldo total: "${sueldo}"`);
    console.groupEnd();
})