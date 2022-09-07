addEventListener("DOMContentLoaded", ()=>{
    // 9. Escribir un programa que calcule el área y el volumen de un cilindro:
    // A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    // V = (PI * r2) * h
   
   

    let r = Number(prompt("Ingrese el valor del radio: "));
    let h = Number(prompt("Ingrese el valor de la altura: "));
    
   
    console.group(`%cFormula (${2}*(${Math.PI}*${Math.pow(r, 2)}))+((${2}*${Math.PI}*${r})*${h} )`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`El área del cilindro es: "${(2*(Math.PI*Math.pow(r, 2)))+((2*Math.PI*r)*h)}"`);
    console.groupEnd();

    console.group(`%cFormula (${Math.PI}*${Math.pow(r, 2)})*${h}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`El volumen del cilindro es: "${(Math.PI*Math.pow(r, 2))*h}"`);
    console.groupEnd();
})