addEventListener("DOMContentLoaded", ()=>{
    // Escribir un programa que calcule el volumen de un elipsoide
    // V = (4/3) * PI * a * b *c
    
   
   

    let a = Number(prompt("Ingrese un valor para a: "));
    let b = Number(prompt("Ingrese un valor para b: "));
    let c = Number(prompt("Ingrese un valor para c: "))
    
   
    console.group(`%cFormula (${4/3}) * ${Math.PI} * ${a} * ${b}* ${c}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`El volumen del elipsoide es de: "${(4/3) * Math.PI * a * b* c}"`);
    console.groupEnd();

})