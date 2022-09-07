addEventListener("DOMContentLoaded", ()=>{
    // Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 + b * x + c, siendo X un valor constante.
   
   

    let A = Number(prompt("Ingrese un valor para A: "));
    let b = Number(prompt("Ingrese un valor para b: "));
    let c = Number(prompt("Ingrse un valor para c"))
    
   
    console.group(`%cFormula ${-b}-(${Math.sqrt(Math.pow(b, 2))}-${Math.sqrt(4)} * ${Math.sqrt(A)}* ${Math.sqrt(c)}) / ${2} * ${A}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`x: "${- b -(Math.sqrt(Math.pow(b, 2)) - Math.sqrt(4) * Math.sqrt(A) * Math.sqrt(c)) / 2 * A }"`);
    console.groupEnd();

    console.group(`%cFormula ${-b} + (${Math.sqrt(Math.pow(b, 2))} - ${Math.sqrt(4)} * ${Math.sqrt(A)} * ${Math.sqrt(c)}) / ${2} * ${A}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`X: ${-b + (Math.sqrt(Math.pow(b, 2)) - Math.sqrt(4) * Math.sqrt(A)* Math.sqrt(c)) / 2 * A} ""`);
    console.groupEnd();
})