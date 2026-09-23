"use strict"
{
// 8. Mostrar la tabla de multiplicar de un número introducido por pantalla.
    num = Number(prompt("Introduzca un numero: "));
    console.log("La tabla de multiplicar del "+ num + "es :")
for ( i = 0; i <= 10; i++) {
   console.log(num + " por "+ i +" es igual a "+ (num*i) ) 
}
}