addEventListener("DOMContentLoaded", ()=>{
// Ejercicio 23. 
// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// • Volumen = PI *(radio^2)* H (altura del depósito)
// • El tiempo se encuentra en minutos.
// • Normalmente se mide el volumen en litros y el tiempo en segundos..

    let radio = Number(prompt("Ingrese el valor del radio: "))
    let altura = Number(prompt("Ingrese la altura: "))
    let tiempo = Number(prompt("Ingrese el tiempo en minutos: "))

    let tiem = tiempo *60
    let Volumen = Math.PI * Math.pow(radio, 2) * altura
    let Q = (Volumen/tiem)

    console.group(`%cFormula ${Math.PI} * ${Math.pow(radio, 2)} * ${altura}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`Es caudal es igual a "${Volumen}"`);
    console.groupEnd();
// -------------------------------------------------------------
    console.group(`%cFormula ${Volumen}/${tiem}`, `background: rebeccapurple; color: antiquewhite; font-family: cursive; padding: 2px; border-radius: 1px solid #925fc4; border-radius: 5px;`);

    console.log(`Es caudal es igual a "${Q}"`);
    console.groupEnd();


})