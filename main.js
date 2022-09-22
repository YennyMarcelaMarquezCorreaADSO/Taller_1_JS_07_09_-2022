addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 29. 
//Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,bpero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código que representen el algoritmo para solucionar este problema. Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula sostenida y la edad del entrevistado.
    

    let nombre = prompt("Ingrese su nombre: ")
    let año = Number(prompt("Ingrese el año actual: "))
    let añona = Number(prompt("Ingrese su año de nacimiento: "))

    let edad = año - añona
   
    console.group(`%cFormula ${año} - ${añona}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`edad: "${edad}"`);
    console.groupEnd();

    console.log(`El/La solicitante "${nombre}" tiene una edad de "${edad}" años`);
})