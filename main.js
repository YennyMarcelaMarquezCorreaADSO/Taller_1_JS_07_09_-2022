addEventListener("DOMContentLoaded", ()=>{
//   8. Escribir un programa que evalúe la siguiente expresión:
//  (a+7*c)/(b+2-a)+2*b 
   

    let a = Number(prompt("Ingrese un valor para a: "));
    let b = Number(prompt("Ingrese un valor para b: "));
    let c = Number(prompt("Ingrese un valor para c: "));
    
   
    console.group(`%cFormula (${a} + ${7} * ${c}) / (${b}+${2}-${a}) + ${2} * ${b}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Resultado de la expresión: "${(a+7*c)/(b+2-a)+2*b}"`);
    console.groupEnd();
})