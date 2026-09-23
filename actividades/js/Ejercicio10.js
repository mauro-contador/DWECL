{
"use strict"
/**10. Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 */
let num1;
do {
    num1 = Number(prompt("Introduzca un numero: "));
} while (isNaN(num1));ç

esPrimo(num1);


function esPrimo(num){
    let esPrimo = false;
    if(num1%2!=0 && num1%num1==0 && num1%1 == 0){
        esPrimo==true;
        console.log("El numero es primo");
    }else{
        esPrimo===false;
        console.log("El numero no es primo"); 
    }
    return esPrimo;
}





}