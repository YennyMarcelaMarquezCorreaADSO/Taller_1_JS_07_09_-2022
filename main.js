addEventListener("DOMContentLoaded", ()=>{
    // 4. Escribir un programa que calcule el área de un triángulo:
    // Base = 7 altura = 4 área del triángulo = (base * altura)/2


    let base = Number(prompt("Ingrese la base", 7));
    let altura = Number(prompt("Ingrese la altura", 4));

    let triangulo =(base * altura)/2 ;
    console.log(`%cFormula (${base} * ${altura}) / 2`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);
    console.log(`El área del triangulo es : "${triangulo}"`);

})