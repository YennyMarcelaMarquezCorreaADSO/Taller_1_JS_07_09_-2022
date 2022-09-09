addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se compone de los siguientes porcentajes:
    // • 55% del promedio final de sus calificaciones de los tres(3) parciales.
    // • 30% de la calificación examen final y
    // • 15% de la calificación trabajo final.
    

    let nota1 =  Number(prompt("Ingrese la nota1: "))
    let nota2 =  Number(prompt("Ingrese la nota2: "))
    let nota3 =  Number(prompt("Ingrese la nota3: "))
    let examenFinal =  Number(prompt("Ingrese la nota del examen final: "))
    let trabajoFinal =  Number(prompt("Ingrese la nota el trabajo final: "))
    let suma = (nota1 + nota2 + nota3)/3
    let promedio1 = (suma * 0.55)
    let promedio2 = (examenFinal * 0.3)
    let promedio3 = (trabajoFinal * 0.15)
    let promedio = (promedio1 + promedio2 + promedio3)

    console.group(`%cFormula (${promedio1} + ${promedio2} + ${promedio3})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Promedio de la materia de algoritmo: "${promedio}"`);
    console.groupEnd();
})