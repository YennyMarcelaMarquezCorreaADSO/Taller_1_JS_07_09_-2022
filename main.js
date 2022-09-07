addEventListener("DOMContentLoaded", ()=>{
    // 2. Escribir un programa que calcule el área de un rectángulo:
    // lado1 = 3 lado2 = 4 área del rectángulo= lado1 * lado2
    let lado1 = Number(prompt("Ingrese el lado 1", 3));
    let lado2 = Number(prompt("Ingrese el lado 2", 4));
    let rectangulo = lado1 * lado2;
    console.log(`El área del 'rectángulo' es: "${rectangulo}"`);

})