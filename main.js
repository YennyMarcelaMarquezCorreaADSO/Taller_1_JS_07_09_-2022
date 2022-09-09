addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    // correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
    // puntos.
    


    let examen1 = Number(prompt("Nota examen 1: "))
    let examen2 = Number(prompt("Nota examen 2: "))
    let examen3 = Number(prompt("Nota examen 3: "))
    let examen4 = Number(prompt("Nota examen 4: "))

    let Promedio = (examen1 + examen2 + examen3 + examen4)/4
    
 
    console.group(`%cFormula (${examen1} + ${examen2} + ${examen3} * ${examen4})/4`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Promedio de las calificaciones: "${Promedio}"`);
    console.groupEnd();
})