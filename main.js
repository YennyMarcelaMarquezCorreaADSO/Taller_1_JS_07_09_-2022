addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 21. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución, por favor utilizar funciones matemáticas de Python para ello
    //d = rc((x2-x1)^2 + (y2-y1)^2)

    let rc = Number(prompt("Ingrese un valor: "))
    let x1 = Number(prompt("Ingrese el valor: "))
    let x2 = Number(prompt("Ingrese el valor: "))
    let y1 = Number(prompt("Ingrese el valor: "))
    let y2 = Number(prompt("Ingrese el valor: "))

    let solucion = rc*((x2-x1)**2 + (y2-y1)**2)

    console.group(`%cFormula (${rc}(${x2}-${x1})**${2}+(${y2}-${y1})**${2})`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`La solución es: : "${solucion}"`);
    console.groupEnd();
})