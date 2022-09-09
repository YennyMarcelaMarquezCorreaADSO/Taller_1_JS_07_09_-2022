addEventListener("DOMContentLoaded", ()=>{
    // Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit
    

    let centigrados =  Number(prompt("Ingrese los grados centigrados: ",30))
    let conversion = (9/5 * centigrados)+32


    console.group(`%cFormula (${9/5} * ${centigrados}) + ${32}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

        console.log(`Grados Farenheit: "${ conversion}"`);
    console.groupEnd();
})