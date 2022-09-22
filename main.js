addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 25. 
//En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para hacer el bizcocho es
    

    let harina = 100

   let jgramos = harina * 2
   
    console.group(`%cFormula ${harina} * ${2}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`La cantidad de gramos para hacer el bizcocho es: ${jgramos}"`);
    console.groupEnd();

})