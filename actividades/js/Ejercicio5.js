"use strict"
{
//5. Mostrar todos los números que hay entre dos números introducidos por el usuario.
"use strict"
    inicio = Number(prompt("Introduzca el inicio: "));
    fin = Number(prompt("Introduzca el final: "));
    console.log("Los numeros que estan dentro de "+inicio+ " y "+ fin +" son :");
    for(i=inicio+1;i<fin;i++){
        console.log(i);
    }
}